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
        vm.ideas.splice(-1, 1);
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
       // vm.vote(action, vm.ideas[vm.ideas.length - 1]);
        vm.ideas.splice(-1,1);
      }, 300);
    };

    vm.options = {
      //minThrowOutDistance: function() {
      //  return 1;
      //},
      throwOutConfidence: function (offset, element) {
        if (offset > 200) {
          return 1
        }
      }
    };
  }

  SwiperController.$inject = ['Ideas', 'FireService', '$timeout'];

  angular.module('cleverr.swiper.controller', ['gajus.swing', 'cleverr.fire'])
    .controller('SwiperController', SwiperController);

})();
