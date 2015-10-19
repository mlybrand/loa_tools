(function() {
    'use strict';

    var appFactory = function(config) {
        var start = function(callback) {
            var express = require('express'),
                app = express(),
                server = null,
                staticFileMaps = config.get('staticFileMaps');

            for (var i = 0, len = staticFileMaps.length; i < len; i++) {
                staticFileMaps[i].directoryName =
                    staticFileMaps[i].directoryName || '/';
                app.use(staticFileMaps[i].directoryName,
                    express.static(__dirname + staticFileMaps[i].filePath));
            }

            app.get('/', function(req, res) {
                var head = '<head><title>Hello World</title></head>',
                    para = '<p>' + staticFileMaps + '</p>',
                    body = '<body><h1>Hello World</h1>' + para + '</body>',
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
