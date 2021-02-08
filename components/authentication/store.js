const Admin = require('./model');


const listAllAdmins = async() => {

    try {
        
        const adminList = await Admin.find({});
        return Promise.resolve( adminList );

    } catch (error) {        
        console.log( error );
        return Promise.reject('Ups anything was wrong, please contact with the manager');
    }

}

const listAdmin = async( email ) => {

    console.log(email)

    try {
        // To do: It is necessary validate if the admin exist or not to resolve 
        const adminList = await Admin.find( { email: email } );
        return Promise.resolve( adminList );

    } catch (error) {        
        console.log( error );
        return Promise.reject('Ups anything was wrong, please contact with the manager');
    }

}

const adminExist = async( email ) => {

    try {

        const emailRes = await Admin.findOne({ email });
        
        return Promise.resolve( emailRes );
        
    } catch (error) {
        console.log( error );
        return Promise.reject( 'Ups anything was wrong, please contact with the manager' );
    }

}

const addAdmin = async( admin ) => {

    try {

        const adminRes = new Admin( admin );
        await adminRes.save();
        
        return Promise.resolve( 'The admin saved success' );
        
    } catch (error) {
        console.log( error );
        return Promise.reject( 'Ups anything was wrong, please contact with the manager' );
    }

}

module.exports = {
    listAllAdmins,
    listAdmin,
    adminExist,
    addAdmin,
}