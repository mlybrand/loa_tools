(function() {
    'use strict';

    describe('server test', function() {
        it('should pass', function() {
            browser.driver.get('http://localhost:3000/');
            expect(browser.driver.getTitle()).toBe('Hello World');
        });
    });
}());
