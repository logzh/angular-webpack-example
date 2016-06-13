var path = require('path');
module.exports = {
  'index': [path.resolve(__dirname, 'public/static/js/entry/index.js')],
  'example': [path.resolve(__dirname, 'public/static/js/entry/example.js')],
  'multiple-named-views': [path.resolve(__dirname, 'public/static/js/entry/multiple-named-views.js')]
}