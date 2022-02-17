const express = require('express')
const router = express.Router()

const registerapplicationv1 = require('./views/register-application/v1/_routes');
router.use('/register-application/v1', registerapplicationv1);

const registerapplicationv2 = require('./views/register-application/v2/_routes');
router.use('/register-application/v2', registerapplicationv2);

const registerapplicationv3 = require('./views/register-application/v3/_routes');
router.use('/register-application/v3', registerapplicationv3);

const registerapplicationv4 = require('./views/register-application/v4/_routes');
router.use('/register-application/v4', registerapplicationv4);

const registerapplicationv5 = require('./views/register-application/v5/_routes');
router.use('/register-application/v5', registerapplicationv5);

const registerapplicationv6 = require('./views/register-application/v6/_routes');
router.use('/register-application/v6', registerapplicationv6);

const registerapplicationv7 = require('./views/register-application/v7/_routes');
router.use('/register-application/v7', registerapplicationv7);

const registerapplicationv8 = require('./views/register-application/v8/_routes');
router.use('/register-application/v8', registerapplicationv8);

const registerv1 = require('./views/register/v1/_routes');
router.use('/register/v1', registerv1);

// Add your routes above the module.exports line
module.exports = router
