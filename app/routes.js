const express = require('express')
const router = express.Router()

const v1 = require('./views/register-application/v1/_routes');
router.use('/register-application/v1', v1);

// Add your routes above the module.exports line
module.exports = router
