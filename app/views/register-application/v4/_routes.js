const express = require('express')
const router = new express.Router()

// England
router.post('/eligibility-england-answer', function (req, res) {

  var install = req.session.data['england']

  if (install == "no"){
    res.redirect('/register-application/v4/eligibility-england-no')
  } else {
    res.redirect('/register-application/v4/eligibility-allocated-developments')
  }
})

// Allocated developments
router.post('/eligibility-allocated-developments-answer', function (req, res) {

  var install = req.session.data['allocated-developments']

  if (install == "no"){
    res.redirect('/register-application/v4/eligibility-allocated-developments-no')
  } else {
    res.redirect('/register-application/v4/sign-in-options')
  }
})

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/register-application/v4/landowner-permission')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Landowner permission
router.post('/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/register-application/v4/landowner-permission-no')
  } else {
    res.redirect('/register-application/v4/landowner-permission-declaration')
  }
})


// Third parties
router.post('/interested-third-parties-answer', function (req, res) {

  var install = req.session.data['interested-third-parties']

  if (install == "yes"){
    res.redirect('/register-application/v4/interested-third-parties-declaration')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

   if (install == "location-rpa"){
    res.redirect('/register-application/v4/location-rpa-search')
  } else {
    res.redirect('/register-application/v4/location-import')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v4/location-land-registry-search-detailed')
  } else if (install == "no"){
    res.redirect('/register-application/v4/location-options')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Location RPA confirm
router.post('/location-rpa-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v4/location-rpa-select')
  } else if (install == "no"){
    res.redirect('/register-application/v4/location-options')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Location import confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v4/location-import')
  } else if (install == "no"){
    res.redirect('/register-application/v4/location-options')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Location draw confirm
router.post('/location-draw-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v4/location-draw-map')
  } else if (install == "no"){
    res.redirect('/register-application/v4/location-options')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v4/metric-no')
  } else {
    res.redirect('/register-application/v4/metric-upload')
  }
})

// Metric check
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v4/metric-upload')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Works responsible
router.post('/land-works-responsible-answer', function (req, res) {

  var install = req.session.data['land-works-responsible']

  if (install == "no"){
    res.redirect('/register-application/v4/land-works-responsible-who')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Management responsible
router.post('/land-management-responsible-answer', function (req, res) {

  var install = req.session.data['land-management-responsible']

  if (install == "no"){
    res.redirect('/register-application/v4/land-management-responsible-who')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Management responsible works
router.post('/land-management-responsible-works-answer', function (req, res) {

  var install = req.session.data['land-management-responsible-works']

  if (install == "no"){
    res.redirect('/register-application/v4/land-management-responsible-who')
  } else {
    res.redirect('/register-application/v4/task-list')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v4/payment-bacs')
  } else {
    res.redirect('/register-application/v4/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v4/payment-bacs-no')
  } else {
    res.redirect('/register-application/v4/payment-status')
  }
})

// Add your routes above the module.exports line
module.exports = router