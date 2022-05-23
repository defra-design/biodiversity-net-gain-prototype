const express = require('express')
const router = express.Router()

// Search
router.post('/search-answer', function (req, res) {

  var install = req.session.data['search-register']

  if (install == "150384"){
    res.redirect('/register/v4/site-a')
  } else {
    res.redirect('/register/v4/search-results')
  }
})

// Search planning ref
router.post('/search-answer-planning-ref', function (req, res) {

  var install = req.session.data['search-register']

  if (install == "150384"){
    res.redirect('/register/v4/development-a')
  } else {
    res.redirect('/register/v4/search-results-planning-ref')
  }
})

// Add your routes above the module.exports line
module.exports = router
