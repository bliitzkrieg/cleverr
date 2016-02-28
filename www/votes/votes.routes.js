(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated.votes', {
      url: "/votes",
      templateUrl: "./votes/votes.html",
      controller: "VotesController",
      controllerAs: 'vtCtrl',
      resolve: {
        Votes: ['FireService', function(FireService) {
          return FireService.getMyVotes();
        }]
      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.votes.routes', ['ui.router', 'cleverr.fire'])
    .config(routes);

})();
