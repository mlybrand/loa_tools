(function() {
    'use strict';

    describe('Main Route', function() {
        it('should go to splash page', function() {
            browser.get('/');
            var header = element(by.css('.navbar-header'));
            expect(header.isPresent()).toBeFalsy();
            var footer = element(by.css('.footer'));
            expect(footer.isPresent()).toBeFalsy();
            var cover = element(by.css('.inner.cover'));
            expect(cover.isPresent()).toBeTruthy();
        });
    });
}());
