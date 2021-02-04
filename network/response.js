
const statusMessage = {
    200: 'Done',
    201: 'Created',
    400: 'Invalid format',
    500: 'Internal error'
}


exports.success = function ( res, status, ok, data ) {

    return res.status( status ).send({
        ok: ok,
        msg: data,
    });

}

exports.error = function ( res, status, ok, details ) {
    
    return res.status( status ).send({
        ok: ok,
        msg: details,
    });

}

exports.validatorError = function ( res, status, ok, errors ) {
    
    return res.status( status ).send({
        ok: ok,
        msg: errors.mapped(),
    });

}