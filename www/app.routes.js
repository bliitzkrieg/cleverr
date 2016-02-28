(function () {
  'use strict';

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cleverr', {
        url: '',
        abstract: true,
        views: {
          "@": {
            templateUrl: "./layout/shell.html"
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  }

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('cleverr.routes', ['ui.router'])
    .config(routes);

})();
