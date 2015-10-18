(function() {
    'use strict';

    module.exports = function(grunt) {
        grunt.registerTask('hello', 'Remove task when actual task added',
            function() {
                console.log('Hello, World!');
            });
    };
}());
