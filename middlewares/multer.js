const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: path.join(__dirname, '../public/uploads'),
    filename: function (req, file, cb) {

        
        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, file.originalname);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    },

});

const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000}
}).single('image');


module.exports = {storage, uploadImage};

