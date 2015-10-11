(function() {
    'use strict';

    module.exports = function(grunt) {
        grunt.registerTask('hello', 'Remove me when actual task is added',
            function() {
                console.log(grunt.config.get('exec'));
            });
    };
}());
