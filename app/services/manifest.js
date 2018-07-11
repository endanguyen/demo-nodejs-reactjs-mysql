var manifest = require('../../public/mix-manifest.json');

function mixLink (link) {
  if (manifest && manifest[link]) {
    return manifest[link]
  }
  return ''
}

module.exports = {
  js: mixLink('/static/user/js/app.js'),
  css: mixLink('/static/user/css/app.css')
}