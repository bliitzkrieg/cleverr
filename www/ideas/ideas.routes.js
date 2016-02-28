(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated.ideas', {
      url: "/ideas",
      templateUrl: "./ideas/ideas.html",
      controller: "IdeaController",
      controllerAs: 'idaCtrl',
      resolve: {
        Ideas: ['FireService', function(FireService) {
          return FireService.getMyIdeas();
        }]
      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.ideas.routes', ['ui.router', 'cleverr.fire'])
    .config(routes);

})();
