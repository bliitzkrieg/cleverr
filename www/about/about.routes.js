(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated.about', {
      url: "/about",
      templateUrl: "./about/about.html",
      controller: "AboutController",
      controllerAs: 'abtCtrl',
      authenticate: true
    });

  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.about.routes', ['ui.router'])
    .config(routes);

})();
