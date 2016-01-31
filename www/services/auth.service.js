(function () {
  'use strict';

  function AuthService($firebaseAuth) {
    var ref = new Firebase('https://sizzling-inferno-6353.firebaseio.com/');
    var auth = $firebaseAuth(ref);

    function getAuth() {
      return auth;
    }

    function getRef() {
      return ref;
    }

    function loginWithEmail(payload) {
      return auth.$authWithPassword(payload);
    }

    function logout() {
      auth.$unauth();
    }

    function isLoggedIn() {
      return auth.$getAuth();
    }

    function currentUser() {
      return auth.$getAuth();
    }

    function loginWithFacebook() {
      return auth.$authWithOAuthPopup("facebook")
    }

    function loginWithTwitter() {
      return auth.$authWithOAuthPopup("twitter")
    }

    return {
      getAuth: getAuth,
      getRef: getRef,
      loginWithEmail: loginWithEmail,
      logout: logout,
      isLoggedIn: isLoggedIn,
      currentUser: currentUser,
      loginWithFacebook: loginWithFacebook,
      loginWithTwitter: loginWithTwitter
    };
  }


  //Inject the auth service dependencies
  AuthService.$inject = ['$firebaseAuth'];

  //Create Module
  angular
    .module('cleverr.auth', ['firebase'])
    .service('AuthService', AuthService);

})();

//https://sizzling-inferno-6353.firebaseio.com/
