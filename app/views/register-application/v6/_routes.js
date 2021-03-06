const express = require('express')
const router = new express.Router()

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/register-application/v6/landowner-permission')
  } else {
    res.redirect('/register-application/v6/land-registry')
  }
})

// Landowner permission
router.post('/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/register-application/v6/not-eligible-landowner')
  } else {
    res.redirect('/register-application/v6/land-registry')
  }
})

// Land registry
router.post('/land-registry-answer', function (req, res) {

  var install = req.session.data['land-registry']

  if (install == "no"){
    res.redirect('/register-application/v6/land-ownership-certificate')
  } else {
    res.redirect('/register-application/v6/third-parties')
  }
})

// Landowner certificate
router.post('/land-ownership-certificate-answer', function (req, res) {

  var install = req.session.data['land-ownership-certificate']

  if (install == "no"){
    res.redirect('/register-application/v6/not-eligible-land-ownership')
  } else {
    res.redirect('/register-application/v6/third-parties')
  }
})

// Landowner permission upload - Land registry yes
router.post('/landowner-permission-correct-answer-land-registry-yes', function (req, res) {

  var install = req.session.data['landowner-permission-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/landowner-permission-upload')
  } else {
    res.redirect('/register-application/v6/land-registry-search')
  }
})

// Landowner permission upload - Land registry no
router.post('/landowner-permission-correct-answer-land-registry-no', function (req, res) {

  var install = req.session.data['landowner-permission-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/landowner-permission-upload')
  } else {
    res.redirect('/register-application/v6/land-ownership-certificate-upload')
  }
})

// Land ownership cerificate upload
router.post('/land-ownership-certificate-correct-answer', function (req, res) {

  var install = req.session.data['land-ownership-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/land-ownership-certificate-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Third parties
router.post('/third-parties-answer', function (req, res) {

  var install = req.session.data['third-parties']

  if (install == "no"){
    res.redirect('/register-application/v6/not-eligible-third-parties')
  } else {
    res.redirect('/register-application/v6/legal-agreements')
  }
})

// Legal agreements
router.post('/legal-agreements-answer', function (req, res) {

  var install = req.session.data['legal-agreements']

  if (install == "none"){
    res.redirect('/register-application/v6/not-eligible-legal-agreements')
  } else {
    res.redirect('/register-application/v6/management-plan')
  }
})

// Management plan
router.post('/management-plan-answer', function (req, res) {

  var install = req.session.data['management-plan']

  if (install == "no"){
    res.redirect('/register-application/v6/not-eligible-management-plan')
  } else {
    res.redirect('/register-application/v6/metric')
  }
})

// Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v6/not-eligible-metric')
  } else {
    res.redirect('/register-application/v6/eligible')
  }
})

// Land registry check
router.post('/land-registry-search-confirm-answer', function (req, res) {

  var install = req.session.data['land-ownership-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/land-registry-search')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "location-rpa"){
    res.redirect('/register-application/v6/location-rpa-search')
  } else if (install == "location-import"){
    res.redirect('/register-application/v6/location-import')
  } else if (install == "location-upload"){
    res.redirect('/register-application/v6/location-upload')
  } else {
    res.redirect('/register-application/v6/location-draw-find')
  }
})

// Location options - Land registry yes
router.post('/location-options-answer-land-registry', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "location-rpa"){
    res.redirect('/register-application/v6/location-rpa-search')
  } else if (install == "location-import"){
    res.redirect('/register-application/v6/location-import')
  } else if (install == "location-upload"){
    res.redirect('/register-application/v6/location-upload')
  } else {
    res.redirect('/register-application/v6/location-draw-map')
  }
})

// Location RPA bespoke
router.post('/location-rpa-bespoke-answer', function (req, res) {

  var install = req.session.data['location-rpa-bespoke']

  if (install == "yes"){
    res.redirect('/register-application/v6/location-rpa-select')
  } else {
    res.redirect('/register-application/v6/location-rpa-draw-boundary')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v6/location-land-registry-search-detailed')
  } else if (install == "no"){
    res.redirect('/register-application/v6/location-options')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Location RPA confirm
router.post('/location-rpa-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v6/location-rpa-select')
  } else if (install == "no"){
    res.redirect('/register-application/v6/location-options')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Location import confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v6/location-import')
  } else if (install == "no"){
    res.redirect('/register-application/v6/location-options')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Location upload confirm
router.post('/location-upload-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v6/location-upload')
  } else if (install == "no"){
    res.redirect('/register-application/v6/location-options')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Location draw confirm
router.post('/location-draw-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v6/location-draw-map')
  } else if (install == "no"){
    res.redirect('/register-application/v6/location-options')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Metric check
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/metric-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Metric check baseline
router.post('/metric-baseline-correct-answer', function (req, res) {

  var install = req.session.data['metric-baseline-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/metric-baseline-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Legal agreement conservation check
router.post('/legal-agreement-conservation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-conservation-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/legal-agreement-conservation-upload')
  } else {
    res.redirect('/register-application/v6/legal-agreement-financial-upload')
  }
})

// Legal agreement financial check
router.post('/legal-agreement-financial-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-financial-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/legal-agreement-financial-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Legal agreement planning obligation check
router.post('/legal-agreement-planning-obligation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-planning-obligation-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/legal-agreement-planning-obligation-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Management plan check
router.post('/management-plan-correct-answer', function (req, res) {

  var install = req.session.data['management-plan-correct']

  if (install == "no"){
    res.redirect('/register-application/v6/management-plan-upload')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v6/payment-bacs')
  } else {
    res.redirect('/register-application/v6/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v6/payment-bacs-no')
  } else {
    res.redirect('/register-application/v6/payment-status')
  }
})

// New application
router.post('/new-application', function (req, res) {
  req.session.data = {}
  res.redirect('/register-application/v6/landowner')
})

// Payment
router.post('/sign-in-answer', function (req, res) {

  var install = req.session.data['signed-in']

  if (install == "yes"){
    res.redirect('/register-application/v6/applications')
  } else {
    res.redirect('/register-application/v6/task-list')
  }
})

// Add your routes above the module.exports line
module.exports = router