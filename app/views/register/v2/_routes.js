const express = require('express')
const router = express.Router()

// Search
router.post('/search-answer', function (req, res) {

  var install = req.session.data['search-register']

  if (install == "150384"){
    res.redirect('/register/v1/gain-site-a')
  } else {
    res.redirect('/register/v1/search-results')
  }
})

// Add your routes above the module.exports line
module.exports = router
