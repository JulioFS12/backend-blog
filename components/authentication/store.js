const Admin = require('./model');


const listAllAdmins = async() => {

    try {
        
        const adminList = await Admin.find({});
        return Promise.resolve( "Users" );

    } catch (error) {        
        console.log( error );
        Promise.reject('Ups anything was wrong, please contact with the manager');
    }

}

const listAdmin = async( admin ) => {

    try {
        // To do: I necessary validate if the admin exist or not to resolve 
        const adminList = await Admin.find( { nombre: admin } );
        return Promise.resolve( 'User' );

    } catch (error) {        
        console.log( error );
        Promise.reject('Ups anything was wrong, please contact with the manager');
    }

}

const userExist = async( email, user ) => {

    try {

        const emailRes = await Admin.findOne({ email });
        const userRes = await Admin.findOne({ user });

        return Promise.resolve( { emai: emailRes, user: userRes} );
        
    } catch (error) {
        console.log( error );
        return Promise.reject( 'Ups anything was wrong, please contact with the manager' );
    }

}

const addUser = async( admin ) => {

    try {

        const adminRes = new Admin( admin )
        
    } catch (error) {
        console.log( error );
        return Promise.reject( 'Ups anything was wrong, please contact with the manager' );
    }

}

module.exports = {
    listAllAdmins,
    listAdmin,
    userExist,
    addUser,
}