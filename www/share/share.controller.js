(function () {
  'use strict';

  function ShareController(FireService, $state, $ionicHistory) {
    var vm = this;
    vm.idea = "";

    vm.shareIdea = function() {
      var payload = {
        content: vm.idea
      };

      FireService.postIdea(payload).then(function() {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('cleverr.swiper');
      }, function(error) {
          vm.error = "An error occured";
      });
    }
  }

  ShareController.$inject = ['FireService', '$state', '$ionicHistory'];

  angular.module('cleverr.share.controller', ['cleverr.fire', 'ui.router'])
    .controller('ShareController', ShareController);
})();
