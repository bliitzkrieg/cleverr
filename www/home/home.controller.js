(function () {
  'use strict';

  function HomeController(ParseService, $state) {
    var vm = this;

    vm.loginControl = {};

    vm.loginWithFacebook = function() {
      ParseService.loginWithFacebook().then(function(success){
        $state.go('cleverr.swiper');
      }, function(error){
        console.log(error); //todo: handle error
      })
    };

  }

  HomeController.$inject = ['ParseService', '$state'];

  angular.module('cleverr.home.controller', ['ui.router', 'cleverr.login', 'cleverr.parse'])
    .controller('HomeController', HomeController);
})();
