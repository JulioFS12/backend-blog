const jwt = require('jsonwebtoken');
const config = require('../config');


const jwtGenerator = async( id, name ) => {

    const payload = { id, name };

    try {

        const token = await jwt.sign( payload,  config.privateKey, {expiresIn: '1h'} );
        return token;
        
    } catch (error) {
        console.log(error)
    }  
        
}

module.exports = jwtGenerator;