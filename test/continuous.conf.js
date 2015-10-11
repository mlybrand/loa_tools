(function() {
    'use strict';

    var specFiles = require('./protractorSpecs'),
        baseUrl = require('./baseUrl');

    exports.config = {
        specs: specFiles,
        baseUrl: baseUrl,
        capabilities: {
            browserName: 'phantomjs'
        }
    };
}());
