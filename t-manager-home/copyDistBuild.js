const copydir = require('copy-dir');

copydir.sync('dist', '../');
copydir.sync('dist/_nuxt', '../_nuxt');
copydir.sync('dist/images', '../images');
copydir.sync('dist/project', '../project');
