(function() {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('noHeaderLayout', {
                abstract: true,
                views: {
                    'layout': {
                        templateUrl: '/html/no-header-layout.html'
                    }
                }
            })
            .state('cover', {
                parent: 'noHeaderLayout',
                url: '/',
                views: {
                    'noHeaderView': {
                        templateUrl: '/html/cover.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);

    //app.controller('MainController', ['$state', function($state) {
    //    console.log('yo');
    //}]);

    //app.controller('CoverController', [function() {
    //    console.log('moi');
    //}]);

}());
