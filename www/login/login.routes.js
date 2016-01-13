(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider.state('cleverr.login', {
      parent: 'cleverr',
      url: "/login",
      views: {
        "@cleverr": {
          templateUrl: "/login/login.html",
          controller: "LoginController",
          controllerAs:'logCtrl'
        }
      }
    });
  }

  config.$inject = ['$stateProvider'];

  angular
    .module('cleverr.login.routes', ['ui.router'])
    .config(config);

})();
