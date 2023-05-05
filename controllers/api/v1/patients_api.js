const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

// api for handling patient registration
module.exports.register = async function(request, response) {

    const doctor = request.doctorId;
    const { name, phone } = request.body;

    try {
        let patient = await Patient.findOne({phone});
        if (patient) {
            // if patient is alreay registered
            return response.status(200).json({
                success: true,
                patient,
            })
        }

        // if patient is not registered, then create one and save it in db
        patient = await Patient.create({name, phone, doctor});
        patient.save();

        return response.status(200).json({
            success: true,
            message: 'Patient Registered Successfully!',
            patient
        })
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in patient registration!',
            error
        })
    }
}

// api for creating report of the patient
module.exports.createReport = async function(request, response) {
    const patient = request.params.id;
    const { status } = request.body;
    const doctor = request.doctorId;

    try {
        // creating an instance of Report Schema and saving it in the db
        const report = await Report.create({patient, doctor, status});
        report.save();

        return response.status(200).json({
            success: true,
            message: 'Report Created Successfully!',
            report
        })
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in createReport!',
            error
        })
    }
}

// api for listing all the reports of a patient created by doctors
module.exports.allReports = async function(request, response) {
    const patient = request.params.id;
    try {
        // getting the reports from the db
        const reports = await Report.find({patient});
        return response.send(reports);
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in allReports!',
            error
        })
    }
}