const express = require('express')
const router = new express.Router()

// Eligibility England
router.post('/eligibility-england-answer', function (req, res) {

  var install = req.session.data['eligibility-england']

  if (install == "Yes"){
    res.redirect('/register-application/v12/eligibility-landowner-consent')
  } else {
    res.redirect('/register-application/v12/eligibility-england-no')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "none"){
    res.redirect('/register-application/v12/location-no')
  } else if (install == "Document or image"){
    res.redirect('/register-application/v12/location-upload')
  } else {
    res.redirect('/register-application/v12/location-import')
  }
})

// Location RPA bespoke
router.post('/location-rpa-bespoke-answer', function (req, res) {

  var install = req.session.data['location-rpa-bespoke']

  if (install == "yes"){
    res.redirect('/register-application/v12/location-rpa-select')
  } else {
    res.redirect('/register-application/v12/location-rpa-draw-boundary')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v12/location-import')
  } else if (install == "no"){
    res.redirect('/register-application/v12/location-upload')
  } else {
    res.redirect('/register-application/v12/task-list')
  }
})

// Location confirm
router.post('/location-confirm-answer-file', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no"){
    res.redirect('/register-application/v12/location-import')
  } else {
    res.redirect('/register-application/v12/task-list')
  }
})

// Location upload confirm
router.post('/location-upload-confirm-answer', function (req, res) {

  var install = req.session.data['location-upload-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v12/location-upload')
  } else {
    res.redirect('/register-application/v12/location-grid-reference')
  }
})

// Location import confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-import-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v12/location-import')
  } else {
    res.redirect('/register-application/v12/location-confirm')
  }
})

// Landowner only
router.post('/landowner-only-answer', function (req, res) {

  var install = req.session.data['landowner-only']

  if (install == "Yes"){
    res.redirect('/register-application/v12/landowner-confirm')
  } else {
    res.redirect('/register-application/v12/landowner-name')
  }
})


// Habitat metric
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v12/metric-upload')
  } else {
    res.redirect('/register-application/v12/metric-data')
  }
})


// Legal agreement
router.post('/legal-agreement-answer', function (req, res) {

  var install = req.session.data['legal-agreement']

  if (install == "none"){
    res.redirect('/register-application/v12/legal-agreement-no')
  } else {
    res.redirect('/register-application/v12/legal-agreement-upload')
  }
})

// Legal agreement check
router.post('/legal-agreement-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-correct']

  if (install == "no"){
    res.redirect('/register-application/v12/legal-agreement-upload')
  } else {
    res.redirect('/register-application/v12/legal-agreement-parties')
  }
})

// Management plan
router.post('/management-plan-answer', function (req, res) {

  var install = req.session.data['management-plan']

  if (install == "yes"){
    res.redirect('/register-application/v12/management-plan-date-start')
  } else {
    res.redirect('/register-application/v12/management-plan-no')
  }
})

// Management plan works
router.post('/management-plan-works-answer', function (req, res) {

  var install = req.session.data['management-plan-works']

  if (install == "yes"){
    res.redirect('/register-application/v12/management-plan-maintaining')
  } else {
    res.redirect('/register-application/v12/management-plan-works-name')
  }
})

// Management plan maintaining
router.post('/management-plan-maintaining-answer', function (req, res) {

  var install = req.session.data['management-plan-maintaining']

  if (install == "yes"){
    res.redirect('/register-application/v12/management-plan-monitoring')
  } else {
    res.redirect('/register-application/v12/management-plan-maintaining-name')
  }
})

// Management plan monitoring
router.post('/management-plan-monitoring-answer', function (req, res) {

  var install = req.session.data['management-plan-monitoring']

  if (install == "yes"){
    res.redirect('/register-application/v12/management-plan-monitoring')
  } else {
    res.redirect('/register-application/v12/management-plan-monitoring-name')
  }
})

// Management plan check
router.post('/management-plan-correct-answer', function (req, res) {

  var install = req.session.data['management-plan-correct']

  if (install == "no"){
    res.redirect('/register-application/v12/management-plan-upload')
  } else {
    res.redirect('/register-application/v12/management-plan-date-start')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v12/payment-bacs')
  } else {
    res.redirect('/register-application/v12/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v12/payment-bacs-no')
  } else {
    res.redirect('/register-application/v12/payment-status')
  }
})

// Sign in 
router.post('/sign-in-answer', function (req, res) {

  var install = req.session.data['signed-in']

  if (install == "yes"){
    res.redirect('/register-application/v12/applications')
  } else {
    res.redirect('/register-application/v12/task-list')
  }
})

// Landowner certificate
router.post('/landowner-certificate-answer', function (req, res) {

  var install = req.session.data['landowner-certificate']

  if (install == "no"){
    res.redirect('/register-application/v12/landowner-certificate-no')
  } else {
    res.redirect('/register-application/v12/landowner-certificate-upload')
  }
})

// Landowner certificate check
router.post('/landowner-certificate-correct-answer', function (req, res) {

  var install = req.session.data['landowner-certificate-correct']

  if (install == "no"){
    res.redirect('/register-application/v12/landowner-certificate-upload')
  } else {
    res.redirect('/register-application/v12/task-list')
  }
})

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "yes"){
    res.redirect('/register-application/v12/landowner-others')
  } else {
    res.redirect('/register-application/v12/landowner-name')
  }
})

// Landowner others
router.post('/landowner-others-answer', function (req, res) {

  var install = req.session.data['landowner-others']

  if (install == "yes"){
    res.redirect('/register-application/v12/landowner-name')
  } else {
    res.redirect('/register-application/v12/landowner-confirm')
  }
})

// Address confirm
router.post('/address-confirm-answer', function (req, res) {

  var install = req.session.data['address-confirm']

  if (install == "yes"){
    res.redirect('/register-application/v12/address-search')
  } else {
    res.redirect('/register-application/v12/task-list')
  }
})

// Address confirm
router.post('/allocation-answer', function (req, res) {

  var install = req.session.data['allocation']

  if (install == "yes"){
    res.redirect('/register-application/v12/allocation-yes')
  } else {
    res.redirect('/register-application/v12/allocation-no')
  }
})

// Add your routes above the module.exports line
module.exports = router