const mongoose = require('mongoose');
const schema = mongoose.Schema;

// schema for the patient report
const reportSchema = new schema({
    patient: {
        type: schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    status: {
        type: String,
        // status of the patient
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
}, {
    timestamps: true
})

const Report = mongoose.model('Report', reportSchema);
module.exports = Report
