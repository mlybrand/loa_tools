(function() {
    'use strict';

    var srcFiles = require('./includes/jsFiles');

    module.exports = {
        src: srcFiles,
        options: {
            config: '.jscsrc'
        }
    };
}());
