(function() {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                controllerAs: 'main',
                template: '',
                redirectTo: '/splash'
            })
            .when('/splash', {
                controller: 'SplashController',
                controllerAs: 'splash',
                templateUrl: '/html/splash.html'
            })
            .otherwise('/');
    }]);

    app.controller('MainController', [function() {

    }]);

    app.controller('SplashController', [function() {

    }]);

}());
