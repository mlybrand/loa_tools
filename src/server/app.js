(function() {
    'use strict';

    var express = require('express'),
        app = express(),
        server = null;

    app.get('/', function(req, res) {
        var head = '<head><title>Hello World</title></head>',
            body = '<body><h1>Hello World</h1></body>',
            page = '<html>' + head + body + '</html>';
        res.send(page);
    });

    server = app.listen(3000, function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
