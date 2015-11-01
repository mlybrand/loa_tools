(function() {
    'use strict';

    describe('Main Route', function() {
        it('should redirect to splash route', function() {
            browser.get('/');
            expect(browser.getCurrentUrl()).toMatch(/\/#\/splash/);
        });
    });
}());
