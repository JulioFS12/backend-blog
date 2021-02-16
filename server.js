const express = require('express');
const app = express();
const { publicRoute, port, stringConnection } = require('./config');
const dbConnection = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./network/routes');
const { configMulter } = require('./middlewares/multer');

app.use(cors());
app.use(bodyParser.json());
app.use( publicRoute, express.static('public') );

routes( app );

app.listen( port , () => {
    console.log(`Server running ${port}`);
});

dbConnection( stringConnection );
