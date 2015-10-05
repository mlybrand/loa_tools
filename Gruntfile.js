module.exports = function(grunt) {
    require('load-grunt-config')(grunt);

    grunt.registerTask('default', function() {
        console.log('I am grunt!');
    });
};