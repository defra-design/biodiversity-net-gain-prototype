const express = require('express')
const router = express.Router()

router.get('/hello-world',(req, res)=>res.send('hello'))

// Add your routes above the module.exports line
module.exports = router
