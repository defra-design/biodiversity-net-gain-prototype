const path = require('path');

module.exports = {
  entry: './app/assets/javascripts/map.js',
  output: {
    filename: 'map-bundle.js',
    path: path.resolve(__dirname, 'public/javascripts'),
  },
}