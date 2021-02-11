const { response } = require("express");
const store = require('./store');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../../middlewares/jwt-generator');

//Instance to response errors or succes
const responseApi = require('../../network/response');

function getAdmin( req, res = response ) {

    const admin = req.query.email;

    if( !admin ){

        store.listAllAdmins()
            .then(
                msg => responseApi.success( res, 200, true , msg )
            )
            .catch(
                msg => responseApi.error( res, 500, false, msg )
            )

    } else {

        store.listAdmin( admin )
            .then(
                msg => responseApi.success( res, 200, true , msg )
            )
            .catch(
                msg => responseApi.error( res, 500, false, msg )
            )

    }

}

function newAdmin( req, res = response ) {

    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    
    store.adminExist( req.body.email )
        .then( msg => {
            
            if ( msg.email ){
                responseApi.error( res, 400, false, 'The user already exist' );
            } else{
                store.addAdmin( req.body )
                    .then( msg => responseApi.success( res, 200, true, msg ) )
                    .catch( msg =>  responseApi.error( res, 500, false, msg ) )
            }

        } )
        .catch(
            msg => responseApi.error( res, 400, false, msg )
        )

}

function adminLogin( req, res = response ) {
    
    const { email, password } = req.query;

    store.adminExist( email )
        .then(
            msg => {

                if ( !!msg === false ){
                    responseApi.error( res, 404, false, 'The email do not exist.' )
                } else {
                    const passwordValidated = bcrypt.compareSync( password, msg.password );

                    if( !passwordValidated ) {
                        responseApi.error( res, 500, false, 'The password is wrong.' )
                    } else {
                        
                        jwtGenerator( msg.id, msg.name )
                        .then(
                            token => responseApi.success( res, 200, true, {
                                id: msg.id, 
                                name: msg.name,
                                token: token,
                            } )
                        )
                        
                    }
                }
            }

                
        )
        .catch(
            msg => responseApi.error( res, 400, false, msg )
        )
}


const updateAdmin = ( req, res = response, ) => {

    
    res.status(500).json({
        msg: 'Nothing here.'
    });

}

module.exports = {
    getAdmin,
    newAdmin,
    adminLogin,
    updateAdmin
}
