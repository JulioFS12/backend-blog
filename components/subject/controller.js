const store = require('./store');
const responseApi = require('../../network/response');
const { uploadImage } = require('../../middlewares/multer');

const upload = (req, res, next ) => {
    uploadImage(req, res, (error) => {
        if(error){
            return res.send({error: 'ERROR CON LA IMAGEN'})
        }
        console.log('HOLA')
        next();
    });
}

const newSubject = ( req, res = response) => {

    console.log(req.body)

}

module.exports = {
    newSubject,
    upload
}