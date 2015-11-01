(function() {
    'use strict';

    module.exports = function(config) {
        config.set({
            basePath: '',
            files: [
                '../../../../bower_components/angular/angular.js',
                '../../../../bower_components/angular-route/angular-route.js',
                '../../../../src/client/**/*.js',
                '../../**/*.test.js'
            ],
            preprocessors: {
                '../../**/*.test.js': ['browserify']
            },
            autoWatch: true,
            frameworks: ['mocha', 'chai', 'browserify'],
            browsers: ['Chrome', 'Firefox', 'PhantomJS'],
            plugins: [
                'karma-browserify',
                'karma-mocha',
                'karma-chai',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-phantomjs-launcher'
            ]
        });
    };
}());
