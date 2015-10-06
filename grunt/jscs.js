(function() {
    'use strict';

    var srcFiles = require('./includes/jsFiles');

    module.exports = {
        jscs: {
            src: srcFiles,
            options: {
                config: '.jscsrc'
            }
        }
    };
}());
