const authentication = require('../components/authentication/networking');
const subject = require('../components/subject/networking');

const routes = ( routes ) => {

    routes.use('/authentication', authentication);
    routes.use('/subject', subject)

}

module.exports = routes;