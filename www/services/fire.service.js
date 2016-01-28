(function () {
  'use strict';

  function FireService(AuthService, $firebaseArray) {
    var auth = AuthService.getAuth();
    var ref = new Firebase('https://sizzling-inferno-6353.firebaseio.com/');
    var ideas = $firebaseArray(ref.child("ideas"));

    function signUp(payload) {
      return auth.$createUser(payload);
    }

    function postIdea(idea) {
      var user = AuthService.currentUser();

      idea.time = new Date().getTime();
      idea.uid = user.uid;
      idea.name = user.facebook.displayName || user.twitter.username;

      ideas.$add(idea);
    }

    function getIdeas() {
      //ref.orderByKey().on("child_added", function(snapshot) {
      //  console.log(snapshot);
      //});
      return ideas;
    }

    return {
      signUp:signUp,
      postIdea:postIdea,
      getIdeas:getIdeas
    };
  }


  //Inject the auth service dependencies
  FireService.$inject = ['AuthService', '$firebaseArray'];

  //Create Module
  angular
    .module('cleverr.fire', ['cleverr.auth', 'firebase'])
    .service('FireService', FireService);

})();

//https://sizzling-inferno-6353.firebaseio.com/
