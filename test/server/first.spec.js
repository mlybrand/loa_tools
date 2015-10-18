(function() {
    'use strict';

    var supertest = require('supertest'),
        port = 3000,
        url = 'http://localhost:' + port,
        api = supertest(url);

    describe('Hitting the site', function() {
        var app, server;

        before(function(done) {
            app = require('../../src/server/app');
            server = app.listen(port, function() {
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
