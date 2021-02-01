const Admin = require('./model');


const listAllAdmins = async() => {

    try {
        
        const adminList = await Admin.find({});
        return Promise.resolve( adminList );

    } catch (error) {
        
        console.log( error );
        Promise.reject(error)

    }

}

const listAdmin = async( admin ) => {

    try {
        // To do: I necessary validate if the admin exist or not to resolve 
        const admin = await Admin.find( { nombre: admin } );
        return Promise.resolve( admin );

    } catch (error) {
        
        console.log( error );
        Promise.reject('Ups anything was wrong, please contact with the manager');

    }

}

module.exports = {
    listAllAdmins,
    listAdmin
}