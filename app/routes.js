const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Landowner
router.post('/sprint-1/register-application/ownership-certificate', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/landowner-permission')
  } else {
    res.redirect('/sprint-1/register-application/ownership-certificate')
  }
})

// Landowner permission
router.post('/sprint-1/register-application/landowner-permission-declaration', function (req, res) {

  var install = req.session.data['landowner-permission']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/landowner-permission-no')
  } else {
    res.redirect('/sprint-1/register-application/landowner-permission-declaration')
  }
})

// Ownership certificate
router.post('/sprint-1/register-application/ownership-certificate-upload', function (req, res) {

  var install = req.session.data['ownership-certificate']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/ownership-certificate-no')
  } else {
    res.redirect('/sprint-1/register-application/ownership-certificate-upload')
  }
})

// Ownership certificate check
router.post('/sprint-1/register-application/site-location-postcode', function (req, res) {

  var install = req.session.data['ownership-certificate-correct']

  if (install == "no"){
    res.redirect('/sprint-1/register-application/ownership-certificate-upload')
  } else {
    res.redirect('/sprint-1/register-application/site-location-postcode')
  }
})

// Third parties
router.post('/sprint-1/register-application/task-list-2', function (req, res) {

  var install = req.session.data['interested-third-parties']

  if (install == "yes"){
    res.redirect('/sprint-1/register-application/interested-third-parties-declaration')
  } else {
    res.redirect('/sprint-1/register-application/task-list-2')
  }
})

module.exports = router