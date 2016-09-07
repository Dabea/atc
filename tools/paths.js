'use strict';

var path = require('path');
var ROOT = path.join(__dirname, './');

var src = './src';
var srcAssetsDir = path.join(src, 'assets');
var scrScriptsFonts = path.join(srcAssetsDir, 'fonts');
var srcScriptsDir = path.join(srcAssetsDir, 'scripts');
var srcStylesDir = path.join(srcAssetsDir, 'style');
var srcImagesDir = path.join(srcAssetsDir, 'images');
var srcAircraft = path.join(srcAssetsDir, 'aircraft');
var srcAirlines = path.join(srcAssetsDir, 'airlines');
var srcAirports = path.join(srcAssetsDir, 'airports');

var build = './build';
var buildAssetsDir = path.join(build, 'assets');
var buildFontsDir = path.join(buildAssetsDir, 'fonts');
var buildScriptsDir = path.join(buildAssetsDir, 'scripts');
var buildStylesDir = path.join(buildAssetsDir, 'style');
var buildImagesDir = path.join(buildAssetsDir, 'images');
var buildAircraft = path.join(buildAssetsDir, 'aircraft');
var buildAirlines = path.join(buildAssetsDir, 'airlines');
var buildAirports = path.join(buildAssetsDir, 'airports');

// configuration object that wraps all path/file/glob
var options = {};
options.ROOT = ROOT;
options.DIR = {
    SRC: src,
    SRC_ASSETS: srcAssetsDir,
    SRC_FONTS: scrScriptsFonts,
    SRC_SCRIPTS: srcScriptsDir,
    SRC_STYLE: srcStylesDir,
    SRC_IMAGES: srcImagesDir,
    SRC_AIRCRAFT: srcAircraft,
    SRC_AIRLINES: srcAirlines,
    SRC_AIRPORTS: srcAirports,

    BUILD: build,
    BUILD_ASSETS: buildAssetsDir,
    BUILD_FONTS: buildFontsDir,
    BUILD_SCRIPTS: buildScriptsDir,
    BUILD_STYLE: buildStylesDir,
    BUILD_IMAGES: buildImagesDir,
    BUILD_AIRCRAFT: buildAircraft,
    BUILD_AIRLINES: buildAirlines,
    BUILD_AIRPORTS: buildAirports,
};

// for specific files
options.FILE = {
    CSS_MAIN: path.join(options.DIR.SRC_STYLE, 'main.css'),
    PKG_JSON: path.join(options.ROOT, 'package.json')
};

options.GLOB = {
    SRC: path.join(options.DIR.SRC, '**/*'),
    BUILD: path.join(options.DIR.BUILD, '**/*'),
    JS: path.join(options.DIR.SRC, '**/*.js'),
    CSS: path.join(options.DIR.SRC, '**/*.css'),
    FONTS: path.join(options.DIR.SRC_ASSETS, 'fonts/**/*'),
    IMAGES: path.join(options.DIR.SRC_IMAGES, '**/*.+(png|jpg|gif|svg)')
};

module.exports = options;
