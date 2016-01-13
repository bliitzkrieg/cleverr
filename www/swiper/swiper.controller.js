(function () {
  'use strict';

  function SwiperController() {
    var vm = this;
  }

  SwiperController.$inject = [];

  angular.module('cleverr.swiper.controller', ['ui.router'])
    .controller('SwiperController', SwiperController);
})();
