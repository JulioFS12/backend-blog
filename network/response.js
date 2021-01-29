

const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = function ( req, res, message, status, ok ) {

    let statusCode = status;
    let statusMessage = message;

    if( !status ){
        status = 200;
    }

    if( !statusMessage ){
        statusMessage = statusMessage[ status ];
    }

    res.status( statusCode ).send({
        ok: ok,
        error:'',
        message: statusMessage,
    })

}

exports.error = function ( req, res, message, status, ok, details ) {
    
    console.error('[response error]' + details);

    res.status( status || 500 ).send({
        ok: ok,
        error: message,
        body: '',
    })

}