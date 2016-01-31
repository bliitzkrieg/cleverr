(function () {
  'use strict';

  function FireService(AuthService, $firebaseArray, $q) {
    var ref = new Firebase('https://sizzling-inferno-6353.firebaseio.com/');

    function postIdea(idea) {
      var deferred = $q.defer();
      var user = AuthService.currentUser();
      $firebaseArray(ref.child("ideas")).$loaded().then(function(ideas) {

        if(angular.isDefined(user.facebook)) {
          idea.name = user.facebook.displayName;
        }
        else if(angular.isDefined(user.twitter)) {
          idea.name = user.twitter.displayName;
        }

        idea.time = new Date().getTime();
        idea.uid = user.uid;
        ideas.$add(idea).then(function(response) {
          var id = response.key();
          ref.child("/users/" + user.uid + "/ideas/" + id).set(true);
          deferred.resolve(response);
        }, function(error) {
          deferred.reject(error);
        });
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function getIdeas() {
      var user = AuthService.currentUser();
      var deferred = $q.defer();

        $firebaseArray(ref.child("ideas")).$loaded().then(function(ideas) {

          $firebaseArray(ref.child("users/" + user.uid + "/voted_on/")).$loaded().then(function(user_voted) {
            var ids = _.map(user_voted, '$id');
            var results = _.filter(ideas, function(item) { return _.indexOf(ids, item.$id) === -1; });
            deferred.resolve(results);
          });

        }, function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function vote(action, idea) {
      var user = AuthService.currentUser();
      var deferred = $q.defer();
      $firebaseArray(ref.child("votes")).$loaded().then(function(votes) {
        var vote = {};
        vote.idea = idea.$id;
        vote.vote = action;
        vote.user = user.uid;

        votes.$add(vote).then(function(response) {

          var id = response.key();
          ref.child("/ideas/" + idea.$id + "/votes/" + id).set(true);
          ref.child("/users/" + user.uid + "/votes/" + id).set(true);
          ref.child("/users/" + user.uid + "/voted_on/" + idea.$id).set(true);
        });

        deferred.resolve(votes);
      }, function(error){
        deferred.reject(error);
      });
    }

    return {
      postIdea:postIdea,
      getIdeas:getIdeas,
      vote:vote
    };
  }


  //Inject the auth service dependencies
  FireService.$inject = ['AuthService', '$firebaseArray', '$q'];

  //Create Module
  angular
    .module('cleverr.fire', ['cleverr.auth', 'firebase'])
    .service('FireService', FireService);

})();
