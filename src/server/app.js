(function() {
    'use strict';

    var express = require('express'),
        app = express(),
        server = null;

    app.get('/', function(req, res) {
        res.send('<html><head><title>Hello World</title></head><body><h1>Hello World</h1></body></html>');
    });

    server = app.listen(3000, function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
