const database = require('mongoose');

const dbConnection = ( stringConnection ) => {

    console.log( stringConnection )

    database.connect( stringConnection, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    } )
    .then(res => console.log('DB connection success..!'))
    .catch(res => console.log(res));
}

module.exports = dbConnection;