const express = require('express')
const router = new express.Router()

// England
router.post('/eligibility-england-answer', function (req, res) {

  var install = req.session.data['england']

  if (install == "no"){
    res.redirect('/register-application/v3/eligibility-england-no')
  } else {
    res.redirect('/register-application/v3/eligibility-allocated-developments')
  }
})

// Allocated developments
router.post('/eligibility-allocated-developments-answer', function (req, res) {

  var install = req.session.data['allocated-developments']

  if (install == "no"){
    res.redirect('/register-application/v3/eligibility-allocated-developments-no')
  } else {
    res.redirect('/register-application/v3/sign-in-options')
  }
})

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/register-application/v3/landowner-permission')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Landowner permission
router.post('/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/register-application/v3/landowner-permission-no')
  } else {
    res.redirect('/register-application/v3/landowner-permission-declaration')
  }
})


// Third parties
router.post('/interested-third-parties-answer', function (req, res) {

  var install = req.session.data['interested-third-parties']

  if (install == "yes"){
    res.redirect('/register-application/v3/interested-third-parties-declaration')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "location-land-registry"){
    res.redirect('/register-application/v3/location-land-registry-search-detailed')
  } else if (install == "location-rpa"){
    res.redirect('/register-application/v3/location-rpa-search')
  } else if (install == "location-import"){
    res.redirect('/register-application/v3/location-import')
  } else {
    res.redirect('/register-application/v3/location-draw-find')
  }
})

// Location confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-import-confirm']

  if (install == "no"){
    res.redirect('/register-application/v3/location-import')
  }
  else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no"){
    res.redirect('/register-application/v3/location-options')
  }
  else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v3/metric-no')
  } else {
    res.redirect('/register-application/v3/metric-upload')
  }
})

// Metric check
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v3/metric-upload')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Works responsible
router.post('/land-works-responsible-answer', function (req, res) {

  var install = req.session.data['land-works-responsible']

  if (install == "no"){
    res.redirect('/register-application/v3/land-works-responsible-who')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Management responsible
router.post('/land-management-responsible-answer', function (req, res) {

  var install = req.session.data['land-management-responsible']

  if (install == "no"){
    res.redirect('/register-application/v3/land-management-responsible-who')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Management responsible works
router.post('/land-management-responsible-works-answer', function (req, res) {

  var install = req.session.data['land-management-responsible-works']

  if (install == "no"){
    res.redirect('/register-application/v3/land-management-responsible-who')
  } else {
    res.redirect('/register-application/v3/task-list')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v3/payment-bacs')
  } else {
    res.redirect('/register-application/v3/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v3/payment-bacs-no')
  } else {
    res.redirect('/register-application/v3/payment-status')
  }
})

// Add your routes above the module.exports line
module.exports = router