(function () {
  'use strict';

  function MenuController(AuthService, $state) {
    var vm = this;
    vm.user = AuthService.currentUser();

    if(angular.isDefined(vm.user.facebook)) {
      vm.image = vm.user.facebook.profileImageURL;
      vm.user = vm.user.facebook.displayName
    }
    else {
      vm.image = vm.user.twitter.profileImageURL;
      vm.user = vm.user.twitter.username.toLowerCase();
    }

    vm.logout = function() {
      AuthService.logout();
      $state.go('cleverr.home');
    };
  }

  MenuController.$inject = ['AuthService', '$state'];

  angular.module('cleverr.menu.controller', ['cleverr.auth', 'ui.router'])
    .controller('MenuController', MenuController);

})();
