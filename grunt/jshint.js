(function() {
    'use strict';

    var srcFiles = require('./includes/jsFiles');

    module.exports = {
        options: {
            jshintrc: '.jshintrc'
        },
        files: {
            src: srcFiles
        }
    };
}());
