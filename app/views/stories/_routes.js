const express = require('express')
const router = new express.Router()


const baseURL = 'stories';




// Local land charge check
router.post('/legal-party-add', function (req, res) {
  req.session.data.legalParties.push(req.body);
  res.redirect('/legal-party-list')
})

// Local land charge check
router.post('*/legal-party-add-organisation', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.legalParties[req.query.id] = req.body
  }else{
     req.session.data.legalParties.push(req.body);
  }

  res.redirect('/'+baseURL+req.params[0]+'/legal-party-list')
})

router.post('*/legal-party-add-individual', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.legalParties[req.query.id] = req.body
  }else{
     req.session.data.legalParties.push(req.body);
  }
  res.redirect('/'+baseURL+req.params[0]+'/legal-party-list')
})

router.get('/land-ownership-list-add', function(req, res) {
    var page = req.query.returnURL || "land-ownership-list"
    req.session.data.landownershipFiles.push("landownership-example.pdf")
    req.session.data.landownershipFiles.push("my-landownership-sample.pdf")
    res.redirect("/"+page)
})

// legal aggrement covernent add responsible body
router.post('*/legal-agreement-concov-reponsible-add', function (req, res) {
  if(req.query.change){
    req.session.data.responsibleBodies[req.query.id] = req.body
  }else{
    req.session.data.responsibleBodies.push(req.body);
  }
  
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-concov-reponsible-list')
})
//
router.post('*/legal-agreement-concov-landowner-org', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.landowners[req.query.id] = req.body
  }else{
     req.session.data.landowners.push(req.body);
  }
 
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-concov-landowner-list')
})


// 
router.post('*/legal-agreement-concov-landowner-individual', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.landowners[req.query.id] = req.body
  }else{
     req.session.data.landowners.push(req.body);
  }
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-concov-landowner-list')
})


router.post('/legal-agreement-concov-reponsible-remove', function (req, res) {

  var install = req.session.data['reponsible-body-remove']

  if (install == "yes"){
    req.session.data.responsibleBodies.splice(req.query.id, 1);
  }
  if(req.session.data.responsibleBodies.length == 0 ){
     res.redirect('/legal-agreement-concov-reponsible-start')
  }
  res.redirect('/legal-agreement-concov-reponsible-list')
})

router.post('/legal-agreement-concov-landowner-remove', function (req, res) {
  console.log("before")
  console.log(req.session.data.landowners)
  var install = req.session.data['landowner-remove']
  {{ req.session.data.landowners}}
  if (install == "yes"){
    req.session.data.landowners.splice(req.query.id, 1);
  }
  console.log("after")
  console.log(req.session.data.landowners)
  if(req.session.data.landowners.length == 0 ){
     res.redirect('/legal-agreement-concov-landowner-start')
  }
  res.redirect('/legal-agreement-concov-landowner-list')
})

router.post('/legal-party-remove', function (req, res) {

  var install = req.session.data['legal-party-remove']

  if (install == "yes"){
    req.session.data.legalParties.splice(req.query.id, 1);
  }
  if(req.session.data.legalParties.length == 0 ){
     res.redirect('/register-application/v20/legal-party-add-start')
  }
  res.redirect('/register-application/v20/legal-party-list')
})
 




// Add your routes above the module.exports line
module.exports = router