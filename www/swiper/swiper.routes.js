(function() {
  'use strict';

  function routes($stateProvider) {

    $stateProvider.state('cleverr.swiper', {
      parent: 'cleverr',
      url: "/swiper",
      views: {
        "@cleverr": {
          templateUrl: "/swiper/swiper.html",
          controller:"SwiperController",
          controllerAs:'swpCtrl'
        }
      },
      resolve: {

      },
      authenticate: true
    });
  }

  routes.$inject = ['$stateProvider'];

  angular
    .module('cleverr.swiper.routes', ['ui.router'])
    .config(routes);

})();
