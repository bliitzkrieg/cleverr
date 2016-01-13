(function () {
  'use strict';

  function HomeController() {
    var vm = this;

    vm.loginControl = {};

    vm.loginWithFacebook = function() {
      alert();
    };

  }

  HomeController.$inject = [];

  angular.module('cleverr.home.controller', ['ui.router', 'cleverr.login'])
    .controller('HomeController', HomeController);
})();
