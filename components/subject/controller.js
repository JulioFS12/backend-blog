const multer = require('../../middlewares/multer');

const newSubject = ( req, res = response) => {

    multerConfig( req, res );

}

module.exports = {
    newSubject,
}