const multer = require('multer');
const path = require('path');


const multerConfig = ( req, res ) => {

    const storage = multer.diskStorage({

        destination: path.join(__dirname, '../public/uploads'),
        filename: function (req, file, cb) {
            console.log(file);
        }

    })

}

module.exports = multerConfig;

