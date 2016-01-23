(function () {
  'use strict';

  function SwiperController(Ideas, $ionicSideMenuDelegate, TDCardDelegate, ParseService) {
    var vm = this;
    vm.ideas = Ideas;

    function doVote(answer, question) {
      ParseService.voteOnIdea(answer).then(function(success) {
        console.log('vote went through');
      }, function (error) {
        console.log('an error occured voting');
      });
    }

    vm.onSwipedLeft = function(index, question) {
      doVote(true, question);
    };

    vm.onSwipedRight = function(index, question) {
      doVote(false, question);
    };

    vm.onDestroyed = function() {

    };

    vm.vote = function(action) {
      if (action === 'good') {
        console.log(action);
      }
      else {
        console.log(action);
      }
    };

  }

  SwiperController.$inject = ['Ideas', '$ionicSideMenuDelegate', 'TDCardDelegate', 'ParseService'];

  angular.module('cleverr.swiper.controller', ['ionic.contrib.ui.tinderCards', 'cleverr.parse'])
    .controller('SwiperController', SwiperController);
})();
