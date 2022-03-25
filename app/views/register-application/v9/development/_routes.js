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


// Add your routes above the module.exports line
module.exports = router