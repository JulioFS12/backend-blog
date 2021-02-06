const { response } = require("express");
const store = require('./store');
const bcrypt = require('bcrypt');

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
    
    store.adminExist( req.body.email, req.body.user )
        .then( msg => {
            
            if ( msg.user || msg.email ){
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

module.exports = {
    getAdmin,
    newAdmin,
}
