const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

// creating a schema for the doctor
const doctorSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// encrypt the password using bcryptjs package before saving the doctor in the database
doctorSchema.pre('save', async function(next) {
    const doctor = this;
    if (doctor.isModified('password') || doctor.isNew) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(doctor.password, salt);
        doctor.password = hash;
    }
    next();
})

// method for comparing password using bcryptjs
doctorSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;