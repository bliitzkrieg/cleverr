(function() {
  'use strict';

  function routes($stateProvider) {
    $stateProvider.state('cleverr.home', {
      parent: 'cleverr',
      url: "/",
      views: {
        "@cleverr": {
          templateUrl: "./home/home.html",
          controller: "HomeController",
          controllerAs: "homeCtrl"
        }
      }
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.home.routes', ['ui.router'])
    .config(routes);

})();
