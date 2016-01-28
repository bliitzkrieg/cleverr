(function () {
  'use strict';

  function LoginController(AuthService, $state) {
    var vm = this;
    vm.loginData = {};

    vm.doLogin = function () {

      AuthService.loginWithEmail(vm.loginData).then(function() {
        $state.go('cleverr.swiper');
      }, function(error) {
        if(error.code === 101) {
          vm.error = "Invalid credentials";
        }
        else {
          console.log(error);
          vm.error = "An error occurred."
        }
      });

    }
  }

  LoginController.$inject = ['AuthService', '$state'];

  angular.module('cleverr.login.controller', ['cleverr.auth', 'ui.router'])
    .controller('LoginController', LoginController);
})();
