const copydir = require('copy-dir');
const fs = require('fs');

copydir.sync('dist', '../');
copydir.sync('dist/_nuxt', '../_nuxt');
if (fs.existsSync('dist/project')) {
  copydir.sync('dist/project', '../project');
}
