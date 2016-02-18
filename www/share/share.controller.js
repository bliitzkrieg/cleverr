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
          vm.idea = "";
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('cleverr.authenticated.swiper');
      }, function(error) {
          vm.error = "An error occurred";
      });
    }
  }

  ShareController.$inject = ['FireService', '$state', '$ionicHistory'];

  angular.module('cleverr.share.controller', ['cleverr.fire', 'ui.router'])
    .controller('ShareController', ShareController);
})();
