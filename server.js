const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(config.publicRoute, express.static('public'));

app.listen( config.port , () => {
    console.log(`Server running ${config.port}`);
});