(function () {
    'use strict';

    var express = require('express'),
        app = express();

    app.get('/', function (req, res) {
        res.send('Hello World');
    });

    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Listening at %s:%s', host, port);
    });
}());
