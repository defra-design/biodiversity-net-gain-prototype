const express = require('express')
const router = new express.Router()

// Eligibility England
router.post('/eligibility-england-answer', function (req, res) {

  var install = req.session.data['eligibility-england']

  if (install == "Yes"){
    res.redirect('/register-application/v19/eligibility-landowner-consent')
  } else {
    res.redirect('/register-application/v19/eligibility-england-no')
  }
})

// Location options
router.post('/location-options-answer', function (req, res) {

  var install = req.session.data['location-options']

  if (install == "none"){
    res.redirect('/register-application/v19/location-no')
  } else if (install == "Document or image"){
    res.redirect('/register-application/v19/location-upload')
  } else {
    res.redirect('/register-application/v19/location-import')
  }
})

// Location RPA bespoke
router.post('/location-rpa-bespoke-answer', function (req, res) {

  var install = req.session.data['location-rpa-bespoke']

  if (install == "yes"){
    res.redirect('/register-application/v19/location-rpa-select')
  } else {
    res.redirect('/register-application/v19/location-rpa-draw-boundary')
  }
})

// Location confirm
router.post('/location-confirm-answer', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v19/location-import')
  } else if (install == "no"){
    res.redirect('/register-application/v19/location-upload')
  } else {
    res.redirect('/register-application/v19/task-list')
  }
})

// Location confirm
router.post('/location-confirm-answer-file', function (req, res) {

  var install = req.session.data['location-confirm']

  if (install == "no"){
    res.redirect('/register-application/v19/location-import')
  } else {
    res.redirect('/register-application/v19/task-list')
  }
})

// Location upload confirm
router.post('/location-upload-confirm-answer', function (req, res) {

  var install = req.session.data['location-upload-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v19/location-upload')
  } else {
    res.redirect('/register-application/v19/location-grid-reference')
  }
})

// Location import confirm
router.post('/location-import-confirm-answer', function (req, res) {

  var install = req.session.data['location-import-confirm']

  if (install == "no-again"){
    res.redirect('/register-application/v19/location-import')
  } else {
    res.redirect('/register-application/v19/location-confirm')
  }
})

// Landowner only
router.post('/landowner-only-answer', function (req, res) {

  var install = req.session.data['landowner-only']

  if (install == "Yes"){
    res.redirect('/register-application/v19/landowner-confirm')
  } else {
    res.redirect('/register-application/v19/landowner-name')
  }
})


// Habitat metric
router.post('/metric-correct-answer', function (req, res) {

  var install = req.session.data['metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/metric-upload')
  } else {
    res.redirect('/register-application/v19/metric-data-baseline')
  }
})

// Allocation metric
router.post('/allocation-metric-correct-answer', function (req, res) {

  var install = req.session.data['allocation-metric-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/allocation-metric-upload')
  } else {
    res.redirect('/register-application/v19/allocation-metric-development')
  }
})

// Allocation development
router.post('/allocation-development-answer', function (req, res) {

  var install = req.session.data['allocation-development']

  if (install == "no"){
    res.redirect('/register-application/v19/allocation-metric-upload')
  } else {
    res.redirect('/register-application/v19/allocation-metric-habitat')
  }
})

// Allocation habitat
router.post('/allocation-habitat-answer', function (req, res) {

  var install = req.session.data['allocation-habitat']

  if (install == "no"){
    res.redirect('/register-application/v19/allocation-metric-upload')
  } else {
    res.redirect('/register-application/v19/allocation-confirm')
  }
})

// Allocation habitat
router.post('/allocation-habitat-answer-record', function (req, res) {

  var install = req.session.data['allocation-habitat']

  if (install == "no"){
    res.redirect('/register-application/v19/allocation-metric-upload')
  } else {
    res.redirect('/register-application/v19/additional-email-add')
  }
})


// Legal agreement
router.post('/legal-agreement-answer', function (req, res) {

  var install = req.session.data['legal-agreement']

  if (install == "none"){
    res.redirect('/register-application/v19/legal-agreement-no')
  } else {
    res.redirect('/register-application/v19/legal-agreement-upload')
  }
})

// Legal agreement check
router.post('/legal-agreement-correct-answer', function (req, res) {

  var install = req.session.data['legal-agreement-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/legal-agreement-upload')
  } else {
    res.redirect('/register-application/v19/legal-party-add-start')
  }
})

// Legal party add
router.post('/legal-party-more-answer', function (req, res) {

  var install = req.session.data['legal-party-more']

  if (install == "yes"){
    // Changed in V19 to remove start date and add end date
    res.redirect('/register-application/v19/legal-agreement-date-end')
  } else {
    
    res.redirect('/register-application/v19/legal-party-add-type')
  }
})

// Local land charge check
router.post('/legal-party-add', function (req, res) {
  req.session.data.legalParties.push(req.body);
  res.redirect('/register-application/v19/legal-party-list')
})
// Local land charge check
router.post('/legal-party-add-organisation', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.legalParties[req.query.id] = req.body
  }else{
     req.session.data.legalParties.push(req.body);
  }
 
  res.redirect('/register-application/v19/legal-party-list')
})
// Local land charge check
router.post('/legal-party-add-individual', function (req, res) {
  if(req.query.change=="yes"){
      req.session.data.legalParties[req.query.id] = req.body
  }else{
     req.session.data.legalParties.push(req.body);
  }
  res.redirect('/register-application/v19/legal-party-list')
})


router.post('/legal-party-remove', function (req, res) {

  var install = req.session.data['legal-party-remove']

  if (install == "yes"){
    req.session.data.legalParties.splice(req.query.id, 1);
  }
  if(req.session.data.legalParties.length == 0 ){
     res.redirect('/register-application/v19/legal-party-add-start')
  }
  res.redirect('/register-application/v19/legal-party-list')
})
 
// Local land charge check
router.post('/local-land-charge-correct-answer', function (req, res) {

  var install = req.session.data['local-land-charge-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/local-land-charge-upload')
  } else {
    res.redirect('/register-application/v19/task-list')
  }
})

// Legal agreement check - concov
router.post('/legal-agreement-correct-answer-concov', function (req, res) {

  var install = req.session.data['legal-agreement-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/legal-agreement-upload')
  } else {
    res.redirect('/register-application/v19/legal-agreement-parties-concov')
  }
})

// Management plan
router.post('/management-plan-answer', function (req, res) {

  var install = req.session.data['management-plan']

  if (install == "yes"){
    res.redirect('/register-application/v19/management-plan-date-start')
  } else {
    res.redirect('/register-application/v19/management-plan-no')
  }
})

// Management plan works
router.post('/management-plan-works-answer', function (req, res) {

  var install = req.session.data['management-plan-works']

  if (install == "yes"){
    res.redirect('/register-application/v19/management-plan-maintaining')
  } else {
    res.redirect('/register-application/v19/management-plan-works-name')
  }
})

// Management plan maintaining
router.post('/management-plan-maintaining-answer', function (req, res) {

  var install = req.session.data['management-plan-maintaining']

  if (install == "yes"){
    res.redirect('/register-application/v19/management-plan-monitoring')
  } else {
    res.redirect('/register-application/v19/management-plan-maintaining-name')
  }
})

// Management plan monitoring
router.post('/management-plan-monitoring-answer', function (req, res) {

  var install = req.session.data['management-plan-monitoring']

  if (install == "yes"){
    res.redirect('/register-application/v19/management-plan-monitoring')
  } else {
    res.redirect('/register-application/v19/management-plan-monitoring-name')
  }
})

// Management plan check
router.post('/management-plan-correct-answer', function (req, res) {

  var install = req.session.data['management-plan-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/management-plan-upload')
  } else {
    res.redirect('/register-application/v19/management-plan-date-end')
  }
})

// Payment
router.post('/payment-answer', function (req, res) {

  var install = req.session.data['payment']

  if (install == "bacs"){
    res.redirect('/register-application/v19/confirmation')
  } else {
    res.redirect('/register-application/v19/payment-card')
  } 
})

// Payment
router.post('/payment-bacs-answer', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v19/payment-no')
  } else {
    res.redirect('/register-application/v19/confirmation')
  }
})

// Payment
router.post('/payment-bacs-answer-allocation', function (req, res) {

  var install = req.session.data['payment-bacs-paid']

  if (install == "no"){
    res.redirect('/register-application/v19/payment-no')
  } else {
    res.redirect('/register-application/v19/allocation-confirmation')
  }
})

// Sign in 
router.post('/sign-in-answer', function (req, res) {

  var install = req.session.data['signed-in']

  if (install == "yes"){
    res.redirect('/register-application/v19/applications')
  } else {
    res.redirect('/register-application/v19/task-list')
  }
})

// Landowner certificate
router.post('/landowner-certificate-answer', function (req, res) {

  var install = req.session.data['landowner-certificate']

  if (install == "no"){
    res.redirect('/register-application/v19/landowner-certificate-no')
  } else {
    res.redirect('/register-application/v19/landowner-certificate-upload')
  }
})

// Landowner certificate check KP
router.post('/landowner-certificate-correct-answer', function (req, res) {



  var install = req.session.data['landowner-certificate-correct']

  if (install == "no"){
    res.redirect('/register-application/v19/landowner-certificate-upload')
  } else {
    // add the current upload to the 
    let file = req.session.data["landowner-certificate-upload"] || "my-landownershipfile.pdf";
    req.session.data.landownershipFiles.push(file)
    res.redirect('/register-application/v19/land-ownership-list')
    
  }
})

// Landowner certificate add more
router.post('/land-ownership-more-answer', function (req, res) {

  var install = req.session.data['land-ownership-more']

  if (install == "yes"){
    res.redirect('/register-application/v19/task-list')
  } else {
    res.redirect('/register-application/v19/landowner-certificate-upload')
  }
})

// Landowner certificate remove
router.post('/land-ownership-remove-answer', function (req, res) {

  var install = req.session.data['land-ownership-remove']

  if (install == "yes"){
    // remove the file from the array
    req.session.data.landownershipFiles.splice(req.query.id, 1);
    // check if there are any files left if not return to the file upload page.
    if(req.session.data.landownershipFiles.length == 0 ){
      res.redirect('/register-application/v19/landowner-certificate-upload')
    }else{
      res.redirect('/register-application/v19/land-ownership-list')
    }
    
  } else {
    res.redirect('/register-application/v19/land-ownership-list')
  }
})

// Landowner
router.post('/landowner-answer', function (req, res) {

  var install = req.session.data['landowner']

  if (install == "yes"){
    res.redirect('/register-application/v19/landowner-others')
  } else {
    res.redirect('/register-application/v19/landowner-name')
  }
})

// Landowner others
router.post('/landowner-others-answer', function (req, res) {

  var install = req.session.data['landowner-others']

  if (install == "yes"){
    res.redirect('/register-application/v19/landowner-name')
  } else {
    res.redirect('/register-application/v19/landowner-confirm')
  }
})

// Address confirm
router.post('/address-confirm-answer', function (req, res) {

  var install = req.session.data['address-confirm']

  if (install == "yes"){
    res.redirect('/register-application/v19/address-search')
  } else {
    res.redirect('/register-application/v19/task-list')
  }
})

// Allocation
router.post('/allocation-answer', function (req, res) {

  var install = req.session.data['allocation']

  if (install == "Yes"){
    res.redirect('/register-application/v19/allocation-metric-upload')
  } else {
    res.redirect('/register-application/v19/allocation-confirm')
  }
})

// Landowner consent
router.post('/landowner-consent-answer', function (req, res) {

  var install = req.session.data['landowner-consent']

  if (install == "Yes, is landowner or leaseholder"){
    res.redirect('/register-application/v19/task-list')
  } else {
    res.redirect('/register-application/v19/landowner-permission-upload')
  }
})

// Landowner consent KP 27/07
router.post('/landowner-permission-check-answer', function (req, res) {

  var install = req.session.data['landowner-permission-correct']

  if (install == "yes"){
    res.redirect('/register-application/v19/task-list')
  } else {
    res.redirect('/register-application/v19/landowner-permission-upload') 
  }
})



// Routing register
router.post('/routing-register-answer', function (req, res) {

  var install = req.session.data['routing-register']

  if (install == "No"){
    res.redirect('/register-application/v19/routing-results')
  } else {
    res.redirect('/register-application/v19/routing-sold')
  }
})

// Additonal email addresses
router.post('/additional-email-more-answer', function (req, res) {

  var install = req.session.data['additional-email-more']

  if (install == "yes"){
    res.redirect('/register-application/v19/additional-email-add')
  } else {
    res.redirect('/register-application/v19/check-answers')
  }
})

// Additonal email addresses allocation
router.post('/additional-email-more-answer-allocation', function (req, res) {

  var install = req.session.data['additional-email-more']

  if (install == "yes"){
    res.redirect('/register-application/v19/additional-email-add')
  } else {
    res.redirect('/register-application/v19/allocation-check-answers')
  }
})

// Add your routes above the module.exports line
module.exports = router