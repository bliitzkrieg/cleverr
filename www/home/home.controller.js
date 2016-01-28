(function () {
  'use strict';

  function HomeController(AuthService, $state) {
    var vm = this;

    vm.randomNumber = Math.floor((Math.random() * 4) + 1);
    console.log(vm.randomNumber);

    vm.loginControl = {};

    vm.loginWithFacebook = function() {
      AuthService.loginWithFacebook().then(function() {
        $state.go('cleverr.swiper');
      }, function(error) {
        console.log(error); //todo: handle error
      });
    };

  }

  HomeController.$inject = ['AuthService', '$state'];

  angular.module('cleverr.home.controller', ['ui.router', 'cleverr.login', 'cleverr.auth'])
    .controller('HomeController', HomeController);
})();
