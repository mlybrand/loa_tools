(function() {
    'use strict';

    var supertest = require('supertest'),
        config = require('../../src/server/config'),
        port = config.get('port'),
        url = 'http://localhost:' + port,
        api = supertest(url);

    describe('Hitting the site', function() {
        var app, server;

        before(function(done) {
            app = require('../../src/server/app');
            server = app(config).start(function() {
                done();
            });
        });

        after(function() {
            server.close();
        });

        it('should  respond with 200', function(done) {
            api.get('/')
                .expect(200)
                .end(done);
        });
    });
}());
