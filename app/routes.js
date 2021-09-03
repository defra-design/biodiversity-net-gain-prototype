const express = require('express')
const router = express.Router()

const registerapplicationv1 = require('./views/register-application/v1/_routes');
router.use('/register-application/v1', registerapplicationv1);

const registerv1 = require('./views/register/v1/_routes');
router.use('/register/v1', registerv1);

// Add your routes above the module.exports line
module.exports = router
