
const statusMessage = {
    200: 'Done',
    201: 'Created',
    400: 'Invalid format',
    500: 'Internal error'
}


exports.success = function ( res, status, ok, data ) {

    return res.status( statusMessage[status] ).send({
        ok: ok,
        message: data,
    });

}

exports.error = function ( res, status, ok, details ) {
    
    res.status(  statusMessage[ status ] ).send({
        ok: ok,
        error: details,
    });

}