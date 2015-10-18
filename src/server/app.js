(function() {
    'use strict';

    var appFactory = function(config) {
        console.log(config.get('env'));
        var start = function(callback) {
            var express = require('express'),
                app = express(),
                server = null;

            app.get('/', function(req, res) {
                var head = '<head><title>Hello World</title></head>',
                    body = '<body><h1>Hello World</h1></body>',
                    page = '<html>' + head + body + '</html>';
                res.send(page);
            });

            return app.listen(config.get('port'), callback);
        };

        return {
            start: start
        };
    };

    module.exports = appFactory;
}());
