require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    stringConnection: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.o1tp6.mongodb.net/${process.env.DB_NAME}`,
}

module.exports = config;