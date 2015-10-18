(function() {
    'use strict';

    var app = require('./app'),
        port = process.env.PORT || 3000;

    var server = app.listen(port, function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
