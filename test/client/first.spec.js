(function() {
    'use strict';

    describe('server test', function() {
        it('should pass', function() {
            browser.get('http://localhost:3000/');
            expect(browser.getTitle()).toBe('Hello World');
        });
    });
}());
