(function () {
  'use strict';

  function SwiperController(Ideas, FireService) {
    var vm = this;
    vm.ideas = Ideas;


    vm.vote = function(action) {
      alert(action);
    };

    vm.move = function (e, s) {
      console.log(e, s);
    }

  }

  SwiperController.$inject = ['Ideas', 'FireService'];

  angular.module('cleverr.swiper.controller', ['gajus.swing', 'cleverr.fire'])
    .controller('SwiperController', SwiperController);
})();
