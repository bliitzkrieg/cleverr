(function () {
  'use strict';

  function ShareController(ParseService, $state, $ionicHistory) {
    var vm = this;
    vm.idea = "";

    vm.shareIdea = function() {
      var payload = {
        content: vm.idea
      };

      ParseService.shareIdea(payload).then(function() {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('cleverr.swiper');
      }, function(error) {
          vm.error = "An error occured";
      });
    }
  }

  ShareController.$inject = ['ParseService', '$state', '$ionicHistory'];

  angular.module('cleverr.share.controller', ['cleverr.parse', 'ui.router'])
    .controller('ShareController', ShareController);
})();
