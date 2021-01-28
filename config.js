require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
}

module.exports = config;