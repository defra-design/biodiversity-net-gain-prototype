const express = require('express')
const router = new express.Router()
var RestClient = require('node-rest-client').Client;

var client = new RestClient();

const baseURL = 'stories';


// defra account 
// Get companies house data


router.post('/register/companies-house-number', function(req, res) {
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
// router.post('/register/address-postcode', function(req, res) {
//   console.log("working")

//     let q = req.body.postcode ||  "W1J 9BR";
//     client.get("https://api.postcodes.io/postcodes/" + q, function(data, response) {
//       // parsed response body as js object

//       console.log(data)
//       req.session.data.company = data
//       res.redirect(301, '/defra-identity/register/address-select-address');



//     })

//   })
 





// Add your routes above the module.exports line
module.exports = router