(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated', {
      parent: 'cleverr',
      abstract: true,
      url: "/user",
      views: {
        "@cleverr": {
          templateUrl: "/authenticated/authenticated.html",
          controller: "AuthenticatedController",
          controllerAs: "authCtrl"
        },
        "menu@cleverr": {
          templateUrl: "/menu/menu.html",
          controller: "MenuController",
          controllerAs: "menuCtrl"
        }
      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.authenticated.routes', ['ui.router'])
    .config(routes);

})();
