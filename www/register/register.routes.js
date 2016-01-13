(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider.state('cleverr.register', {
      parent: 'cleverr',
      url: "/register",
      views: {
        "@cleverr": {
          templateUrl: "/register/register.html",
          controller: "RegisterController",
          controllerAs:'regCtrl'
        }
      }
    });
  }

  config.$inject = ['$stateProvider'];

  angular
    .module('cleverr.register.routes', ['ui.router'])
    .config(config);

})();
