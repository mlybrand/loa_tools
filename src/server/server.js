(function() {
    'use strict';

    var app = require('./app');

    var server = app.listen(3000, function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
