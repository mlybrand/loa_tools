(function() {
    'use strict';

    var express = require('express'),
        app = express(),
        server = null;

    app.get('/', function(req, res) {
        res.send('Hello World');
    });

    server = app.listen(3000, function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
