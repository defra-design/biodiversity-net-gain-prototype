/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]


============================================================================

*/

module.exports = {

  // Insert values here
  'legalParties': [],
  'landownershipFiles':[],
  'responsibleBodies':[],
  'legalAgreementFiles':[],
  'landowners':[],
  'hasDefraID': 'yes', // use this to switch the login to re-route to the defra id prototype
  'site-postcode': 'LS29 6JE',
  'defraName': "Jo Smith",
  'defraEmail': "joe@imaginaryfarm.co.uk",
  'registrationPaymentAmount': '658.70',
  'latestVersion': 'v19'

}
