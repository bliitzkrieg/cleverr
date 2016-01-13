(function () {
  'use strict';

  function LoginController(ParseService, $state) {
    var vm = this;
    vm.loginData = {};

    vm.doLogin = function () {

      ParseService.login(vm.loginData).then(function() {
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

  LoginController.$inject = ['ParseService', '$state'];

  angular.module('cleverr.login.controller', ['cleverr.parse', 'ui.router'])
    .controller('LoginController', LoginController);
})();
