(function () {
  'use strict';

  function HomeController(AuthService, $state) {
    var vm = this;

    vm.loginWithFacebook = function() {
      AuthService.loginWithFacebook().then(function() {
        $state.go('cleverr.authenticated.swiper');
      }, function(error) {
        console.log(error); //todo: handle error
      });
    };

    vm.loginWithTwitter = function() {
      AuthService.loginWithTwitter().then(function() {
        $state.go('cleverr.authenticated.swiper');
      }, function(error) {
        console.log(error); //todo: handle error
      });
    };

  }

  HomeController.$inject = ['AuthService', '$state'];

  angular.module('cleverr.home.controller', ['ui.router', 'cleverr.login', 'cleverr.auth'])
    .controller('HomeController', HomeController);
})();
