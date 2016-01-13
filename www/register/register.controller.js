(function () {
  'use strict';

  function RegisterController(ParseService) {
    var vm = this;
    vm.registerData = {};

    vm.doRegister = function() {
      //Do validation

      ParseService.register(vm.registerData).then(function(success) {
        console.log(success);
      }, function(error) {
        console.log(error);
      });

    }

  }

  RegisterController.$inject = ['ParseService'];

  angular.module('cleverr.register.controller', ['ui.router', 'cleverr.parse'])
    .controller('RegisterController', RegisterController);
})();
