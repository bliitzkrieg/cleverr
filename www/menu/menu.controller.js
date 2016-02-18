(function () {
  'use strict';

  function MenuController(AuthService) {
    var vm = this;
    vm.user = AuthService.currentUser();
    vm.image = vm.user.facebook.profileImageURL || vm.user.twitter.profileImageURL;
  }

  MenuController.$inject = ['AuthService'];

  angular.module('cleverr.menu.controller', ['cleverr.auth'])
    .controller('MenuController', MenuController);

})();
