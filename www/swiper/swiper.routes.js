(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.authenticated.swiper', {
      url: "/swiper",
      templateUrl: "/swiper/swiper.html",
      controller: "SwiperController",
      controllerAs: 'swpCtrl',
      resolve: {
        Ideas: ['FireService', function(FireService) {
          return FireService.getIdeas();
        }]
      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.swiper.routes', ['ui.router', 'cleverr.fire'])
    .config(routes);

})();
