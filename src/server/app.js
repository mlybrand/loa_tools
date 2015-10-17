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

    module.exports = app;
}());
