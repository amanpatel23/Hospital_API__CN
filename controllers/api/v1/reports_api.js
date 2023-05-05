const Report = require('../../../models/report');

// api for listing all the reports having a particula status
module.exports.reportsByStatus = async function(request, response) {
    const status = request.params.status;
    try {
        // getting the reports from the db
        const reports = await Report.find({status});
        return response.send(reports);
    }
    catch(error) {
        return response.status(500).json({
            success: false,
            message: 'error in reportsByStatus',
            error
        })
    }
}