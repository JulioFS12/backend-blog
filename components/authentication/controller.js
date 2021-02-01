const { response } = require("express");
const store = require('./store');
const responseApi = require('../../network/response');

function getAdmin( req, res = response ) {

    const admin = req.query.nombre;

    if( !admin ){

        store.listAllAdmins()
            .then(
                data => responseApi.success( res, 200, true , data )
            )
            .catch(
                details => responseApi.error( res, 500, false, details )
            )

    } else {

        store.listAdmin( admin )
            .then(
                data => responseApi.success( res, 200, true , data )
            )
            .catch(
                details => responseApi.error( res, 500, false, details )
            )

    }
    
    res.status(500).json({
        ok: "USERS"
    })

}

module.exports = {
    getAdmin,
}