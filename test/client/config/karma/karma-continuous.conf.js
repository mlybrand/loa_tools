(function() {
    'use strict';

    module.exports = function(config) {
        config.set({
            basePath: '',
            files: [
                '../../../../src/client/**/*.js',
                '../../**/*.test.js'
            ],
            preprocessors: {
                '../../**/*.test.js': ['browserify']
            },
            autoWatch: true,
            frameworks: ['mocha', 'chai', 'browserify'],
            browsers: ['PhantomJS'],
            plugins: [
                'karma-browserify',
                'karma-mocha',
                'karma-chai',
                'karma-phantomjs-launcher'
            ]
        });
    };
}());
