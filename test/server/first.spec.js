(function() {
    'use strict';

    var supertest = require('supertest'),
        url = 'http://localhost:3000',
        api = supertest(url);

    describe('Hitting the site', function() {
        var app, server;

        before(function(done) {
            app = require('../../src/server/app');
            server = app.listen(3000, function() {
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
