(function() {
    'use strict';

    var mozjpeg = require('imagemin-mozjpeg');

    module.exports = {
        main: {
            options: {
                optimizationLevel: 3,
                use: [mozjpeg()]
            },
            files: [{
                expand: true,
                cwd: 'src/server/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'src/server/public/img/'
            }]
        }
    };
}());
