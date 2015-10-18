(function() {
    'use strict';

    var config = require('./config'),
        app = require('./app');

    var server = app(config).start(function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
