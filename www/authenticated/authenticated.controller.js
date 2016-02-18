(function () {
  'use strict';

  function AuthenticatedController($ionicSideMenuDelegate) {
    var vm = this;

    vm.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleRight();
    };
  }

  AuthenticatedController.$inject = ['$ionicSideMenuDelegate'];

  angular.module('cleverr.authenticated.controller', [])
    .controller('AuthenticatedController', AuthenticatedController);
})();
