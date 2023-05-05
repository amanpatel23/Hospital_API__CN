const Doctor = require('../../../models/doctor');
// requring jsonwebtoken pakcage for creating the token
const jwt = require('jsonwebtoken');

// api for handling doctor registration
module.exports.register = async function(request, response) {
    const data = request.body;
    
    try {
        // creating an instace of doctor schema and saving it in database
        const doctor = await Doctor.create(data);
        doctor.save();

        return response.status(200).json({
            success: true,
            message: 'Doctor Registered Successfully!',
            doctor
        })
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in doctor registration!'
        })
    }
}

// api handling LogIn request of the doctor
module.exports.login = async function(request, response) {
    const { email, password } = request.body;
    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            // if the doctor is not registered in the database
            return response.status(404).json({
                success: false,
                message: 'Doctor Not Found!'
            })
        }

        const isMatch = await doctor.comparePassword(password);
        if (!isMatch) {
            // if the passwords don't match
            return response.status(401).json({
                success: false,
                message: 'Invalid Credentials!'
            })
        }

        // creating jwt token to use in for the authentication
        const token = jwt.sign({doctorId: doctor._id}, 'amanpatel', {expiresIn: '1h'});
        return response.status(200).json({
            success: true,
            token,
            message: `LogIn Successful!, ${doctor.username}`
        })
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in doctor login!',
            error
        })
    }
}