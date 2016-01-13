(function () {
  'use strict';

  function runBlock($rootScope, $ionicPlatform, ParseService, $state) {

    Parse.initialize("9vE3KcQxpK8qmbOkh9N3HtLAPaxiPTtXPXRoSNbp", "CSYfe6COA7MWQMf6tyVFExxFiKSjSKIYZJKQSRbf");

    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

    });


    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState) {
      var user = ParseService.isLoggedIn();

      if (!user && toState.authenticate) {
        event.preventDefault();
        $state.transitionTo('cleverr.login');
      }

    });

  }

  runBlock.$inject = ['$rootScope', '$ionicPlatform', 'ParseService', '$state'];

  angular.module('cleverr', [
      'ionic',
      'cleverr.routes',
      'cleverr.home',
      'cleverr.register',
      'cleverr.swiper',
      'cleverr.parse',

      'ui.router'
    ])
    .run(runBlock);

})();
