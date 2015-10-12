(function() {
    'use strict';

    var specFiles = require('../../includes/protractorSpecs'),
        baseUrl = require('../../includes/baseUrl');

    exports.config = {
        specs: specFiles,
        baseUrl: baseUrl,
        capabilities: {
            browserName: 'firefox'
        }
    };
}());
