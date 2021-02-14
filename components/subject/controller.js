const { uploadImage } = require('../../middlewares/multer');


const newSubject = ( req, res = response) => {

    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.send(err);
        }

        const newBody = {
            ...req.body,
            image: req.file
        }
        
        console.log(newBody);
        res.send('uploaded');
    });

}

module.exports = {
    newSubject,
}