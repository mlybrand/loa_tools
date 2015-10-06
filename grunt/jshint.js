(function() {
    'use strict';

    var srcFiles = require('./includes/jsFiles');

    module.exports = {
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: srcFiles
            }
        }
    };
}());
