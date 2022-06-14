const express = require('express')
const router = express.Router()


router.get('/*/:version/*', function (req, res, next) {
  req.params;
  
  if (req.session.data['version'] == req.params['version']){
    next();
  } else {
      req.session.data['version'] = req.params['version'];
      console.log(req.session.data['version']);
      res.redirect(req.originalUrl);
  }
});


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

const registerapplicationv9land = require('./views/register-application/v9/land/_routes');
router.use('/register-application/v9/land', registerapplicationv9land);

const registerapplicationv9development = require('./views/register-application/v9/development/_routes');
router.use('/register-application/v9/development', registerapplicationv9development);

const registerv1 = require('./views/register/v1/_routes');
router.use('/register/v1', registerv1);

const registerv2 = require('./views/register/v2/_routes');
router.use('/register/v2', registerv2);

const registerv3 = require('./views/register/v3/_routes');
router.use('/register/v3', registerv3);

const registerv4 = require('./views/register/v4/_routes');
router.use('/register/v4', registerv4);

const registerv5 = require('./views/register/v5/_routes');
router.use('/register/v5', registerv5);

// Add your routes above the module.exports line
module.exports = router
