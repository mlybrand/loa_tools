(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainController',
                controllerAs: 'main',
                template: ''
            })
            .state('splash', {
                url: '/splash',
                controller: 'SplashController',
                controllerAs: 'splash',
                templateUrl: '/html/splash.html'
            });

        $urlRouterProvider.otherwise('/');
    }]);

    app.controller('MainController', ['$state', function($state) {
        $state.go('splash');
    }]);

    app.controller('SplashController', [function() {

    }]);

}());
