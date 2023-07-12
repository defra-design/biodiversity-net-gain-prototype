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

const registerapplicationv10 = require('./views/register-application/v10/_routes');
router.use('/register-application/v10', registerapplicationv10);

const registerapplicationv11 = require('./views/register-application/v11/_routes');
router.use('/register-application/v11', registerapplicationv11);

const registerapplicationv12 = require('./views/register-application/v12/_routes');
router.use('/register-application/v12', registerapplicationv12);

const registerapplicationv13 = require('./views/register-application/v13/_routes');
router.use('/register-application/v13', registerapplicationv13);

const registerapplicationv14 = require('./views/register-application/v14/_routes');
router.use('/register-application/v14', registerapplicationv14);

const registerapplicationv15 = require('./views/register-application/v15/_routes');
router.use('/register-application/v15', registerapplicationv15);

const registerapplicationv16 = require('./views/register-application/v16/_routes');
router.use('/register-application/v16', registerapplicationv16);

const registerapplicationv17 = require('./views/register-application/v17/_routes');
router.use('/register-application/v17', registerapplicationv17);

const registerapplicationv18 = require('./views/register-application/v18/_routes');
router.use('/register-application/v18', registerapplicationv18);

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

router.post('/email-address-page', function (req, res) {
  // uses GOV.UK notify
  // uses GOV.UK notify
  var NotifyClient = require('notifications-node-client').NotifyClient;
  var notifyClient = new NotifyClient("landowner_journey-cbaaee0b-476a-4cb2-b826-e4c49d0f269e-6c0b4885-c9f2-41f0-b2ea-e8a8718cb9a0");

  notifyClient.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '4ba89f17-3e66-465b-8d21-5bb1320aa373',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  ).then(response => console.log(response)).catch(err => console.error(err))

  res.redirect('/notify-email-confirmation');
});

// Add your routes above the module.exports line
module.exports = router

//global function to clear all data before redirecting to another page
// use <a href="/clear-data?url=/folder/page">
router.get('/clear-data', function(req, res) {
  req.session.data = {}
  return res.redirect(301, req.query.url);
})

// Adding "query" to every page. There could be a better implementaion using middleware. 
// in nunjkucks you can call {{query[key]}}

router.get('*', function(req, res) {
  let path = req.params[0]
  let pathEnd = path.slice(-1)
  let newPath = path.substring(1)
  if (path == "/") {
    // Top home page
    path = "index"
  } else if (pathEnd == "/") {
    // Check if this is the route folder, if so, then render the index page.
    path = newPath + "index"
  } else {
    path = newPath
  }
  res.render(path, {
    "query": req.query,
  });
})

