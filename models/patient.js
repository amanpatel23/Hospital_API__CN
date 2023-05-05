const mongoose = require('mongoose');
const schema = mongoose.Schema;

// creating a schema for the patient
const patientSchema = new schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        validate: {
            // for validating the phone number
            validator: function(v) {
              return /\d{10}/.test(v);
            },
            message: (props) => `${props.value} is not a valid phone number!`
        },
        required: true,
        unique: true
    },
    doctor: {
       type: schema.Types.ObjectId,
       ref: 'Doctor',
       required: true
    }
}, {
    timestamps: true
})

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;