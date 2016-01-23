(function () {
  'use strict';

  function runBlock($rootScope, $ionicPlatform, ParseService, $state, $ionicHistory) {

    Parse.initialize("9vE3KcQxpK8qmbOkh9N3HtLAPaxiPTtXPXRoSNbp", "CSYfe6COA7MWQMf6tyVFExxFiKSjSKIYZJKQSRbf");

    window.fbAsyncInit = function() {
      Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '1559156141043200', // Facebook App ID
        status     : true,  // check Facebook Login status
        cookie     : true,  // enable cookies to allow Parse to access the session
        xfbml      : true,  // initialize Facebook social plugins on the page
        version    : 'v2.3' // point to the latest Facebook Graph API version
      });

    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

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

      if(!user && toState.authenticate) {
        event.preventDefault();
        $state.go('cleverr.home');
      }
      else if(user && (toState.name === 'cleverr.home' || toState.name === 'cleverr.register' || toState.name === 'cleverr.login')) {
        $state.go('cleverr.swiper');
      }

    });

  }

  runBlock.$inject = ['$rootScope', '$ionicPlatform', 'ParseService', '$state', '$ionicHistory'];

  angular.module('cleverr', [
      'ionic',
      'cleverr.routes',
      'cleverr.home',
      'cleverr.parse',
      'cleverr.login',
      'cleverr.register',
      'cleverr.swiper',
      'cleverr.share',
      'cleverr.menu',

      'ui.router'
    ])
    .run(runBlock);

})();
