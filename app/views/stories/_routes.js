const express = require('express')
const router = new express.Router()
var RestClient = require('node-rest-client').Client;



var client = new RestClient();

const baseURL = 'stories';


// defra account 
// Get companies house data


router.post('/defra-identity/register/companies-house-number', function(req, res) {
  console.log("working")
    var args = {
      headers: {
        "Authorization": "zlgqkDNX156irCJYp_cdjGs5O_nHQUUhmS5w4LYF"
      }
    };
    let q = req.body.crn || 10521625;
    client.get("https://api.company-information.service.gov.uk/company/" + q, args, function(data, response) {
      // parsed response body as js object

      console.log(data.company_name)
      req.session.data.company = data
      if (data.company_name) {
        if(data.company_status == "dissolved"){
          res.redirect(301, '/' + base_url + 'crn-lookup/cannot-use');
        }else{
            res.redirect(301, '/defra-identity/register/companies-house-confirm');
        }

      }
      else {
        res.redirect(301, '/' + base_url + 'crn-lookup/not-found');
      }



    })

  })
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
router.post('*/legal-agreement-lpa-add', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.legalParties[req.query.id] = req.body
  }else{
     req.session.data.legalParties.push(req.body.lpa);
  }
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-lpa-list')
})
router.post('*/legal-agreement-lpa-remove', function (req, res) {

  var install = req.session.data['legal-party-remove']

  if (install == "yes"){
    req.session.data.legalParties.splice(req.query.id, 1);
  }
  if(req.session.data.legalParties.length == 0 ){
     res.redirect('/register-application/v20/legal-agreement-lpa-start')
  }
  res.redirect('/register-application/v20/legal-agreement-lpa-list')
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
 
router.post('*/legal-agreement-check', function (req, res) {

  if (req.body['legal-agreement-correct'] == "yes"){
    if(req.query.change){
      req.session.data.legalAgreementFiles[req.query.id] = req.body
    }else{
      req.session.data.legalAgreementFiles.push(req.body);
    }
    res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-list')
  }
  // if "no"
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-upload');
})

router.post('*/legal-agreement-remove', function (req, res) {

  var install = req.session.data['agreement-remove']

  if (install == "yes"){
    req.session.data.legalAgreementFiles.splice(req.query.id, 1);
  }
  if(req.session.data.legalAgreementFiles.length == 0 ){
     res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-upload-start')
  }
  res.redirect('/'+baseURL+req.params[0]+'/legal-agreement-list')
})
 




// Add your routes above the module.exports line
module.exports = router