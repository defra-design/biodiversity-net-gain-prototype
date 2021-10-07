const express = require('express')
const router = new express.Router()

// England
router.post('/eligibility-england-answer', function (req, res) {

  var install = req.session.data['england']

  if (install == "no"){
    res.redirect('/register-application/v2/eligibility-england-no')
  } else {
    res.redirect('/register-application/v2/eligibility-allocated-developments')
  }
})

// Allocated developments
router.post('/eligibility-allocated-developments-answer', function (req, res) {

  var install = req.session.data['allocated-developments']

  if (install == "no"){
    res.redirect('/register-application/v2/eligibility-allocated-developments-no')
  } else {
    res.redirect('/register-application/v2/sign-in-options')
  }
})

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/register-application/v2/landowner-permission')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Landowner permission
router.post('/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/register-application/v2/landowner-permission-no')
  } else {
    res.redirect('/register-application/v2/landowner-permission-declaration')
  }
})

// Land registry
router.post('/land-registry-answer', function (req, res) {

  var install = req.session.data['land-registry']

  if (install == "no"){
    res.redirect('/register-application/v2/land-registry-no')
  } else {
    res.redirect('/register-application/v2/land-registry-search')
  }
})

// Land registry check
router.post('/land-registry-search-confirm-answer', function (req, res) {

  var install = req.session.data['land-registry-correct']

  if (install == "no"){
    res.redirect('/register-application/v2/land-registry-search')
  } else {
    res.redirect('/register-application/v2/interested-third-parties')
  }
})

// Ownership certificate
router.post('/ownership-certificate-answer', function (req, res) {

  var install = req.session.data['ownership-certificate']

  if (install == "no"){
    res.redirect('/register-application/v2/ownership-certificate-no')
  } else {
    res.redirect('/register-application/v2/ownership-certificate-upload')
  }
})

// Ownership certificate check
router.post('/ownership-certificate-check-answer', function (req, res) {

  var install = req.session.data['ownership-certificate-correct']

  if (install == "no"){
    res.redirect('/register-application/v2/ownership-certificate-upload')
  } else {
    res.redirect('/register-application/v2/interested-third-parties')
  }
})

// Third parties
router.post('/interested-third-parties-answer', function (req, res) {

  var install = req.session.data['interested-third-parties']

  if (install == "yes"){
    res.redirect('/register-application/v2/interested-third-parties-declaration')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v2/metric-no')
  } else {
    res.redirect('/register-application/v2/metric-upload')
  }
})

// Metric
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v2/metric-upload')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Works responsible
router.post('/land-works-responsible-answer', function (req, res) {

  var install = req.session.data['land-works-responsible']

  if (install == "no"){
    res.redirect('/register-application/v2/land-works-responsible-who')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Management responsible
router.post('/land-management-responsible-answer', function (req, res) {

  var install = req.session.data['land-management-responsible']

  if (install == "no"){
    res.redirect('/register-application/v2/land-management-responsible-works')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Management responsible works
router.post('/land-management-responsible-works-answer', function (req, res) {

  var install = req.session.data['land-management-responsible-works']

  if (install == "no"){
    res.redirect('/register-application/v2/land-management-responsible-who')
  } else {
    res.redirect('/register-application/v2/task-list')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v2/payment-bacs')
  } else {
    res.redirect('/register-application/v2/payment-card')
  }
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v2/payment-bacs-no')
  } else {
    res.redirect('/register-application/v2/payment-status')
  }
})

// Add your routes above the module.exports line
module.exports = router