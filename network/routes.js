const authentication = require('../components/authentication/networking');

const routes = ( routes ) => {

    routes.use( '/authentication', authentication);

}

module.exports = routes;