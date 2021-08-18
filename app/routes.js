const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Landowner
router.post('/sprint-1/register-application/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/landowner-permission')
  } else {
    res.redirect('/sprint-1/register-application/ownership-certificate')
  }
})

// Landowner permission
router.post('/sprint-1/register-application/landowner-permission-answer', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/landowner-permission-no')
  } else {
    res.redirect('/sprint-1/register-application/landowner-permission-declaration')
  }
})

// Ownership certificate
router.post('/sprint-1/register-application/ownership-certificate-answer', function (req, res) {

  var install = req.session.data['ownership-certificate']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/ownership-certificate-no')
  } else {
    res.redirect('/sprint-1/register-application/ownership-certificate-upload')
  }
})

// Ownership certificate check
router.post('/sprint-1/register-application/ownership-certificate-check-answer', function (req, res) {

  var install = req.session.data['ownership-certificate-correct']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/ownership-certificate-upload')
  } else {
    res.redirect('/sprint-1/register-application/interested-third-parties')
  }
})

// Third parties
router.post('/sprint-1/register-application/interested-third-parties-answer', function (req, res) {

  var install = req.session.data['interested-third-parties']

  if (install == "yes"){
    res.redirect('/sprint-1/register-application/interested-third-parties-declaration')
  } else {
    res.redirect('/sprint-1/register-application/task-list-2')
  }
})

// Metric
router.post('/sprint-1/register-application/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/metric-no')
  } else {
    res.redirect('/sprint-1/register-application/metric-upload')
  }
})

// Metric
router.post('/sprint-1/register-application/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/metric-upload')
  } else {
    res.redirect('/sprint-1/register-application/task-list-4')
  }
})

// Works responsible
router.post('/sprint-1/register-application/land-works-responsible-answer', function (req, res) {

  var install = req.session.data['land-works-responsible']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/land-works-responsible-who')
  } else {
    res.redirect('/sprint-1/register-application/task-list-5')
  }
})

// Management responsible
router.post('/sprint-1/register-application/land-management-responsible-answer', function (req, res) {

  var install = req.session.data['land-management-responsible']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/land-management-responsible-works')
  } else {
    res.redirect('/sprint-1/register-application/task-list-6')
  }
})

// Management responsible works
router.post('/sprint-1/register-application/land-management-responsible-works-answer', function (req, res) {

  var install = req.session.data['land-management-responsible-works']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/land-management-responsible-who')
  } else {
    res.redirect('/sprint-1/register-application/task-list-6')
  }
})

// Payment
router.post('/sprint-1/register-application/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/sprint-1/register-application/payment-bacs')
  } else {
    res.redirect('/sprint-1/register-application/payment-card')
  }
})

// Payment
router.post('/sprint-1/register-application/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/payment-bacs-no')
  } else {
    res.redirect('/sprint-1/register-application/task-list-8')
  }
})

module.exports = router