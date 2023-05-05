// requring jsonwebtoken package for authenticating the doctor
const jwt = require('jsonwebtoken');

// middleware function for authentication of the doctor
module.exports.auth = async function(request, response, next) {
    // getting token
    let token = request.header('Authorization');
    if (!token) {
        // if token doens't exist
        return response.status(401).json({
            success: false,
            message: 'No Token, Authorization Denied!'
        })
    }

    try {
        // removing bearer
        token = token.split(' ')[1];
        // verifying the tokent against the secret key
        const decode = jwt.verify(token, 'amanpatel');
        // saving the doctor_id in the request for the further access
        request.doctorId = decode.doctorId;
        next();
    }
    catch(error) {
        response.status(401).json({
            message: 'Invalid Token!'
        })
    }
}