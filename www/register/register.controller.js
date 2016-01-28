(function () {
  'use strict';

  function RegisterController(FireService, $state) {
    var vm = this;
    vm.registerData = {};

    vm.doRegister = function() {
      //todo: Do validation

      FireService.signUp(vm.registerData).then(function() {
        $state.go('cleverr.swiper');
      }, function(error) {
        console.log(error);
        //todo: Handle error
      });

    }

  }

  RegisterController.$inject = ['FireService', '$state'];

  angular.module('cleverr.register.controller', ['ui.router', 'cleverr.fire'])
    .controller('RegisterController', RegisterController);
})();
