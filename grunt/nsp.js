(function() {
    'use strict';

    var grunt = require('grunt');

    module.exports = {
        package: grunt.file.readJSON('package.json')
    };

}());

