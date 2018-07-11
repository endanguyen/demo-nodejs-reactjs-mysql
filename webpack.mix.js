const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const blocks = mix.inProduction() ? [ 'develblock' ] : null;

mix.setPublicPath('./public/')
  .react('resources/user/src/app.js', 'public/static/user/js')
  .sass('resources/user/scss/app.scss', 'public/static/user/css')
  .sourceMaps()
  .copy( 'resources/user/images/', 'public/static/user/images/' )
  .copy( 'node_modules/font-awesome/fonts/', 'public/static/user/fonts/' )
  .version();
