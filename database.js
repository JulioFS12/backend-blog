const database = require('mongoose');

const dbConnection = ( stringConnection ) => {

    database.connect( stringConnection, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,

    } )
    .then(res => console.log('DB connection success..!'))
    .catch(res => console.log(res));
}

module.exports = dbConnection;