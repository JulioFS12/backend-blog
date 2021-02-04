const { response } = require("express");
const store = require('./store');

//Instance to response errors or succes
const responseApi = require('../../network/response');

function getAdmin( req, res = response ) {

    const admin = req.query.name;

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
    
    const email = req.body.email;
    const user = req.body.user;

    store.userExist( email, user )
        .then( res => {
            
            if ( res.user || res.email ){
                responseApi.error( res, 400, false, 'The user already exist' );
            } else{

            }

        } )
        .catch(
            res => responseApi.error( res, 400, false, msg )
        )

}

module.exports = {
    getAdmin,
    newAdmin,
}
