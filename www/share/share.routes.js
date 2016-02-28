(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated.share', {
      parent: 'cleverr.authenticated',
      url: "/share",
      views: {
        "@cleverr": {
          templateUrl: "./share/share.html",
          controller: "ShareController",
          controllerAs: 'shrCtrl'
        }
      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.share.routes', ['ui.router'])
    .config(routes);

})();
