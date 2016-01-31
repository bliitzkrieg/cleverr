(function () {
  'use strict';

  function SwiperController(Ideas, FireService, $timeout) {
    var vm = this;
    vm.ideas = Ideas;

    vm.vote = function(action, idea) {
      //FireService.vote(action, idea);
    };

    vm.destroyCard = function () {
      $timeout(function() {
        vm.ideas.splice(-1,1);
      }, 0);
    };

    vm.clickVote = function(action) {

      if(action) {
        vm.ideas[vm.ideas.length - 1].goFlyingLeft = true;
      }
      else {
        vm.ideas[vm.ideas.length - 1].goFlyingRight = true;
      }

      $timeout(function() {
        vm.ideas[vm.ideas.length - 1].goFlyingLeft = false;
        vm.ideas[vm.ideas.length - 1].goFlyingRight = false;
        vm.vote(action, vm.ideas[vm.ideas.length - 1]);
        vm.ideas.splice(-1,1);
      }, 500);
    };

  }

  SwiperController.$inject = ['Ideas', 'FireService', '$timeout'];

  angular.module('cleverr.swiper.controller', ['gajus.swing', 'cleverr.fire'])
    .controller('SwiperController', SwiperController);
})();
