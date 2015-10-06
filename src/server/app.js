(function() {
    'use strict';

    var start = function() {
        console.log('starting');
    };

    var stop = function() {
        console.log('stopping');
    };

    module.exports = {
        start: start,
        stop: stop
    };
}());
