const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { getAdmin, newAdmin, adminLogin, updateAdmin } = require('./controller');
const validator = require( '../../middlewares/validator' );

router.get('/', getAdmin );

router.post(
        '/new',
        [
                check('name', 'The name field must be fill').not().isEmpty(),
                check('email', 'The email field must have email format').isEmail(),
                check('user', 'The user field must be fill').not().isEmpty(),
                check('password', 'The password field must have six charactes at least').isLength({ min: 6}),
                validator
        ],
        newAdmin
);

router.get(
        '/login', 
        [
                check('email', 'The email field must have email format').isEmail(),
                check('password', 'The password field must have six charactes at least').isLength({ min: 6 }),
                validator
        ],
        adminLogin
);

router.patch(
        '/update', 
        [
                check('name', 'The name field must be fill').not().isEmpty(),
                check('email', 'The email field must have email format').isEmail(),
                check('user', 'The user field must be fill').not().isEmpty(),
                check('password', 'The password field must have six charactes at least').isLength({ min: 6}),
                validator
        ],
        updateAdmin,
);

module.exports = router;