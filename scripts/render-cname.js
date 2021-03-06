'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = {
    renderCname: function () {
        const sourcePath = upath.resolve(upath.dirname(__filename), '../src/');
        const indexFile = upath.resolve(upath.dirname(__filename), '../dist/CNAME');
        sh.cp(indexFile, sourcePath);
    },
    
    moveCnameBack: function () {
        console.log('hi');
        const destPath = upath.resolve(upath.dirname(__filename), '../dist/');
        const indexFile = upath.resolve(upath.dirname(__filename), '../src/CNAME');
        console.log({destPath, indexFile});
        sh.cp(indexFile, destPath);
    },

    deleteSrcCname: function () {
        const indexFile = upath.resolve(upath.dirname(__filename), '../src/CNAME');
        sh.rm(indexFile);
    }
};