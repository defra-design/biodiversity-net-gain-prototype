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

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/notify-email', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It???s not a secret so it???s fine to put it
    // in your code.
    '4ba89f17-3e66-465b-8d21-5bb1320aa373',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/notify-email-confirmation');

});

// Add your routes above the module.exports line
module.exports = router
