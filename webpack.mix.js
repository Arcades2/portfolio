const mix = require('laravel-mix');

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your WordPlate application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JavaScript files.
 |
 */

const theme = process.env.WP_THEME;
const themePath = `public/themes/${theme}`;
const assetsPath = `${themePath}/assets`;

mix.setResourceRoot('../');
mix.setPublicPath(assetsPath);

mix.react('resources/scripts/app.js', 'scripts');
mix.sass('resources/styles/app.scss', 'styles');
mix.browserSync({
  proxy: 'portfolio.test',
  files: [
    `${themePath}/*.php`,
    `${assetsPath}/scripts/*.js`,
    `${assetsPath}/styles/*.css`,
  ],
});

mix.disableNotifications();
