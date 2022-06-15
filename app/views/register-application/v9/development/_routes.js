const express = require('express')
const router = new express.Router()

// Eligible - Planning ref
router.post('/planning-ref-answer', function (req, res) {

  var install = req.session.data['eligible-planning-ref']

  if (install == "no"){
    res.redirect('/register-application/v9/development/not-eligible-planning-ref')
  } else {
    res.redirect('/register-application/v9/development/eligible-offsite-ref')
  }
})

// Eligible - Offsite ref
router.post('/offsite-ref-answer', function (req, res) {

  var install = req.session.data['eligible-offsite-ref']

  if (install == "no"){
    res.redirect('/register-application/v9/development/not-eligible-offsite-ref')
  } else {
    res.redirect('/register-application/v9/development/eligible-metric')
  }
})

// Eligible - Metric
router.post('/metric-answer', function (req, res) {

  var install = req.session.data['metric']

  if (install == "no"){
    res.redirect('/register-application/v9/development/not-eligible-metric')
  } else {
    res.redirect('/register-application/v9/development/eligible-legal-agreements')
  }
})

// Eligible - Legal agreement
router.post('/legal-agreements-answer', function (req, res) {

  var install = req.session.data['legal-agreements']

  if (install == "no"){
    res.redirect('/register-application/v9/development/not-legal-agreements')
  } else {
    res.redirect('/register-application/v9/development/eligible')
  }
})

// Sign in 
router.post('/sign-in-answer', function (req, res) {

  var install = req.session.data['signed-in']

  if (install == "yes"){
    res.redirect('/register-application/v9/development/applications')
  } else {
    res.redirect('/register-application/v9/development/task-list')
  }
})

// Metric check file
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v9/development/metric-upload')
  } else {
    res.redirect('/register-application/v9/development/metric-check-data')
  }
})

// Metric check data
router.post('/metric-check-data-answer', function (req, res) {

  var install = req.session.data['metric-check-data']

  if (install == "no"){
    res.redirect('/register-application/v9/development/metric-upload')
  } else {
    res.redirect('/register-application/v9/development/task-list')
  }
})

// Legal agreement planning obligation check
router.post('/legal-agreement-planning-obligation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-planning-obligation-correct']

  if (install == "no"){
    res.redirect('/register-application/v9/development/upload-planning-obligation')
  } else {
    res.redirect('/register-application/v9/development/offsite-confirm')
  }
})

// Legal agreement conservation check
router.post('/legal-agreement-conservation-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-conservation-correct']

  if (install == "no"){
    res.redirect('/register-application/v9/development/legal-agreement-conservation-upload')
  } else {
    res.redirect('/register-application/v9/development/legal-agreement-financial-upload')
  }
})

// Legal agreement financial check
router.post('/legal-agreement-financial-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-financial-correct']

  if (install == "no"){
    res.redirect('/register-application/v9/development/legal-agreement-financial-upload')
  } else {
    res.redirect('/register-application/v9/development/offsite-confirm')
  }
})

// Offsite ref check
router.post('/offsite-confirm-answer', function (req, res) {

  var install = req.session.data['offsite-confirm']

  if (install == "no"){
    res.redirect('/register-application/v9/development/offsite-ref')
  } else {
    res.redirect('/register-application/v9/development/offsite-multiple')
  }
})

// Offsite ref check - multiple
router.post('/offsite-confirm-answer-multiple', function (req, res) {

  var install = req.session.data['offsite-confirm']

  if (install == "no"){
    res.redirect('/register-application/v9/development/offsite-ref')
  } else {
    res.redirect('/register-application/v9/development/offsite-allocate')
  }
})

// Offsite multiple
router.post('/offsite-multiple-answer', function (req, res) {

  var install = req.session.data['offsite-multiple']

  if (install == "no"){
    res.redirect('/register-application/v9/development/upload-planning-obligation')
  } else {
    res.redirect('/register-application/v9/development/offsite-allocate')
  }
})


// Add your routes above the module.exports line
module.exports = router