(function() {
    'use strict';

    describe('Main Route', function() {
        it('should redirect to splash route', function() {
            browser.get('http://localhost:3000/');
            expect(browser.getTitle()).toBe('Hello World');
        });
    });
}());
