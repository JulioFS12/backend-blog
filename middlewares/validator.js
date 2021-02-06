const { validationResult } = require('express-validator');
const responseApi = require('../network/response');

const validator = ( req, res, next ) => {

    const errors = validationResult( req );

    if( !errors.isEmpty() ){

        responseApi.validatorError( res, 400, false, errors )

    } else {
        next();
    }

}

module.exports = validator;