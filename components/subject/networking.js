const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const validator = require('../../middlewares/validator');
const { newSubject } = require('./controller');

router.post(
    '/new', 
    [
        check('title', 'The title can not be empty.').isEmpty(),
        check('description', 'The description can not be less than 120.').isEmpty(),
        check('image', 'The field image can not be empty.').isEmpty(),
        validator,
    ],
    newSubject
);


module.exports  = router;