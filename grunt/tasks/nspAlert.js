(function() {
    'use strict';

    var lastChecked = new Date('11/15/2015 12:25:25 GMT-0800');

    module.exports = function(grunt) {
        grunt.registerTask('nspAlert',
            'Checks to see if too much time has passed without running nsp',
            function() {
                var dayInterval = 15,
                    ms = 1000,
                    sec = 60,
                    min = 60,
                    hr = 24,
                    interval = dayInterval * hr * min * sec * ms,
                    today = new Date();

                if (today - lastChecked > interval) {
                    var msg =
                        'Run nsp for potential security threats.';
                    throw new Error(msg);
                }
                return true;
            });
    };

}());
