(function () {
  'use strict';

  function SwiperController($ionicSideMenuDelegate) {
    var vm = this;
  }

  SwiperController.$inject = ['$ionicSideMenuDelegate'];

  angular.module('cleverr.swiper.controller', [])
    .controller('SwiperController', SwiperController);
})();
