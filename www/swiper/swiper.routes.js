(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.swiper', {
      parent: 'cleverr',
      url: "/swiper",
      views: {
        "@cleverr": {
          templateUrl: "/swiper/swiper.html",
          controller: "SwiperController",
          controllerAs: 'swpCtrl'
        },
        "menu@cleverr": {
          templateUrl: "/menu/menu.html",
          controller:"MenuController",
          controllerAs:'mnuCtrl'
        }
      },
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
