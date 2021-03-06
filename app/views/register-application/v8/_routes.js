const express = require('express')
const router = new express.Router()

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/register-application/v8/landowner-permission')
  } else {
    res.redirect('/register-application/v8/land-registry')
  }
})

// Landowner permission
router.post('/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-landowner')
  } else {
    res.redirect('/register-application/v8/land-registry')
  }
})

// Land registry
router.post('/land-registry-answer', function (req, res) {

  var install = req.session.data['land-registry']

  if (install == "no"){
    res.redirect('/register-application/v8/land-ownership-certificate')
  } else {
    res.redirect('/register-application/v8/third-parties')
  }
})

// Landowner certificate
router.post('/land-ownership-certificate-answer', function (req, res) {

  var install = req.session.data['land-ownership-certificate']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-land-ownership')
  } else {
    res.redirect('/register-application/v8/third-parties')
  }
})

// Landowner permission upload - Land registry yes
router.post('/landowner-permission-correct-answer-land-registry-yes', function (req, res) {

  var install = req.session.data['landowner-permission-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/landowner-permission-upload')
  } else {
    res.redirect('/register-application/v8/land-registry-search')
  }
})

// Landowner permission upload - Land registry no
router.post('/landowner-permission-correct-answer-land-registry-no', function (req, res) {

  var install = req.session.data['landowner-permission-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/landowner-permission-upload')
  } else {
    res.redirect('/register-application/v8/land-ownership-certificate-upload')
  }
})

// Land ownership cerificate upload
router.post('/land-ownership-certificate-correct-answer', function (req, res) {

  var install = req.session.data['land-ownership-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/land-ownership-certificate-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Third parties
router.post('/third-parties-answer', function (req, res) {

  var install = req.session.data['third-parties']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-third-parties')
  } else {
    res.redirect('/register-application/v8/legal-agreements')
  }
})

// Legal agreements
router.post('/legal-agreements-answer', function (req, res) {

  var install = req.session.data['legal-agreements']

  if (install == "none"){
    res.redirect('/register-application/v8/not-eligible-legal-agreements')
  } else {
    res.redirect('/register-application/v8/management-plan')
  }
})

// Management plan
router.post('/management-plan-answer', function (req, res) {

  var install = req.session.data['management-plan']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-management-plan')
  } else {
    res.redirect('/register-application/v8/metric')
  }
})

// Habitat eligibility
router.post('/habitat-eligibility-answer', function (req, res) {

  var install = req.session.data['habitat-eligibility']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-habitat')
  } else {
    res.redirect('/register-application/v8/metric')
  }
})

// Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v8/not-eligible-metric')
  } else {
    res.redirect('/register-application/v8/eligible')
  }
})

// Land registry check
router.post('/land-registry-search-confirm-answer', function (req, res) {

  var install = req.session.data['land-ownership-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/land-registry-search')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "location-rpa"){
    res.redirect('/register-application/v8/location-rpa-search')
  } else if (install == "location-import"){
    res.redirect('/register-application/v8/location-import')
  } else if (install == "location-upload"){
    res.redirect('/register-application/v8/location-upload')
  } else {
    res.redirect('/register-application/v8/location-upload')
  }
})

// Location options - Land registry yes
router.post('/location-options-answer-land-registry', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "location-rpa"){
    res.redirect('/register-application/v8/location-rpa-search')
  } else if (install == "location-import"){
    res.redirect('/register-application/v8/location-import')
  } else if (install == "location-upload"){
    res.redirect('/register-application/v8/location-upload')
  } else {
    res.redirect('/register-application/v8/location-draw-map')
  }
})

// Location RPA bespoke
router.post('/location-rpa-bespoke-answer', function (req, res) {

  var install = req.session.data['location-rpa-bespoke']

  if (install == "yes"){
    res.redirect('/register-application/v8/location-rpa-select')
  } else {
    res.redirect('/register-application/v8/location-rpa-draw-boundary')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v8/location-land-registry-search-detailed')
  } else if (install == "no"){
    res.redirect('/register-application/v8/location-options')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Location RPA confirm
router.post('/location-rpa-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v8/location-rpa-select')
  } else if (install == "no"){
    res.redirect('/register-application/v8/location-options')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Location import confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v8/location-import')
  } else if (install == "no"){
    res.redirect('/register-application/v8/location-options')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Location upload confirm
router.post('/location-upload-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v8/location-upload')
  } else if (install == "no"){
    res.redirect('/register-application/v8/location-options')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Location draw confirm
router.post('/location-draw-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v8/location-draw-map')
  } else if (install == "no"){
    res.redirect('/register-application/v8/location-options')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Habitat
router.post('/habitat-answer', function (req, res) {

  var install = req.session.data['habitat']

  if (install == "metric"){
    res.redirect('/register-application/v8/habitat-metric-upload')
  } else {
    res.redirect('/register-application/v8/habitat-add')
  }
})

// Habitat
router.post('/habitat-answer', function (req, res) {

  var install = req.session.data['habitat']

  if (install == "metric"){
    res.redirect('/register-application/v8/habitat-metric-upload')
  } else {
    res.redirect('/register-application/v8/habitat-add')
  }
})

// Habitat add
router.post('/habitat-add-answer', function (req, res) {

  var install = req.session.data['habitat-add']

  if (install == "river"){
    res.redirect('/register-application/v8/habitat-add-river')
  } else if (install == "hedgerow"){
    res.redirect('/register-application/v8/habitat-add-hedgerow')
  } else {
    res.redirect('/register-application/v8/habitat-add-broad-type')
  }
})

// Habitat metric
router.post('/habitat-metric-answer', function (req, res) {

  var install = req.session.data['habitat-metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/habitat-metric-upload')
  } else {
    res.redirect('/register-application/v8/habitat-check-data')
  }
})

// Metric check
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/metric-upload')
  } else {
    res.redirect('/register-application/v8/metric-check-data')
  }
})

// Metric check
router.post('/metric-check-data-answer', function (req, res) {

  var install = req.session.data['metric-check-data']

  if (install == "no"){
    res.redirect('/register-application/v8/metric-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Metric check baseline
router.post('/metric-baseline-correct-answer', function (req, res) {

  var install = req.session.data['metric-baseline-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/metric-baseline-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Legal agreement conservation check
router.post('/legal-agreement-conservation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-conservation-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/legal-agreement-conservation-upload')
  } else {
    res.redirect('/register-application/v8/legal-agreement-financial-upload')
  }
})

// Legal agreement financial check
router.post('/legal-agreement-financial-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-financial-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/legal-agreement-financial-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Legal agreement planning obligation check
router.post('/legal-agreement-planning-obligation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-planning-obligation-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/legal-agreement-planning-obligation-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Management plan check
router.post('/management-plan-correct-answer', function (req, res) {

  var install = req.session.data['management-plan-correct']

  if (install == "no"){
    res.redirect('/register-application/v8/management-plan-upload')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v8/payment-bacs')
  } else {
    res.redirect('/register-application/v8/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v8/payment-bacs-no')
  } else {
    res.redirect('/register-application/v8/payment-status')
  }
})

// New application
router.post('/new-application', function (req, res) {
  req.session.data = {}
  res.redirect('/register-application/v8/landowner')
})

// Payment
router.post('/sign-in-answer', function (req, res) {

  var install = req.session.data['signed-in']

  if (install == "yes"){
    res.redirect('/register-application/v8/applications')
  } else {
    res.redirect('/register-application/v8/task-list')
  }
})

// Add your routes above the module.exports line
module.exports = router