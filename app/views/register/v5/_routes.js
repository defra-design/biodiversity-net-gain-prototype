const express = require('express')
const router = express.Router()

// Search
router.post('/search-answer', function (req, res) {

  var install = req.session.data['search-register']

  if (install == "BNG-220115001"){
    res.redirect('/register/v5/offsite-a')
  } else if (install == "21/02367/FUL"){
    res.redirect('/register/v5/development-a')
  }  else {
    res.redirect('/register/v5/search-results')
  }
})


// Add your routes above the module.exports line
module.exports = router
