'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = {
    renderHtml: function () {
        const sourcePath = upath.resolve(upath.dirname(__filename), '../src/');
        const indexFile = upath.resolve(upath.dirname(__filename), '../dist/index.html');

        sh.cp(indexFile, sourcePath);
    },
    
    moveHtmlBack: function () {
        const destPath = upath.resolve(upath.dirname(__filename), '../dist/');
        const indexFile = upath.resolve(upath.dirname(__filename), '../src/index.html');
        
        sh.cp(indexFile, destPath);
    },

    deleteSrcHtml: function () {
        const indexFile = upath.resolve(upath.dirname(__filename), '../src/index.html');
        sh.rm(indexFile);
    }
};