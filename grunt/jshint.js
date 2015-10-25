(function() {
    'use strict';

    var srcFiles = require('./includes/jsFiles');

    module.exports = {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        files: {
            src: srcFiles
        }
    };
}());
