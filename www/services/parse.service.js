(function () {
  'use strict';

  function ParseService($q) {

    this.isLoggedIn = function() {
      return Parse.User.current();
    };

    this.getSession = function () {
      return Parse.User.current().attributes.sessionToken;
    };

    this.getUserId = function () {
      return Parse.User.current().id;
    };

    this.getEmail = function() {
      return Parse.User.current().attributes.email;
    };

    this.getUsername = function() {
      return Parse.User.current().attributes.username;
    };

    this.getUser = function() {
      return Parse.User.current();
    };

    this.register = function (payload) {
      var user = new Parse.User();
      user.set("username", payload.username);
      user.set("password", payload.password);
      user.set("email", payload.email);

      // other fields can be set just like with Parse.Object
      //user.set("somethingelse", "like this!");
      return user.signUp(null, {
        success: function (user) {
          return user;
        },
        error: function (user, error) {
          return error;
        }
      });
    };

    this.login = function (payload) {
      return Parse.User.logIn(payload.username, payload.password, {
        success: function (user) {
          return user;
        },
        error: function (user, error) {
          return error;
        }
      });
    };

    this.getIdeas = function () {
      var Idea = Parse.Object.extend("Question");
      var query = new Parse.Query(Idea);
      query.notEqualTo("user", this.getUser());
      var deferred = $q.defer();

      query.find({
        success: function (success) {
          deferred.resolve(success);
        },
        error: function(error) {
          deferred.reject(error);
        }
      });

      return deferred.promise;
    };

    this.shareIdea = function (payload) {
      var Idea = Parse.Object.extend("Question"),
        idea = new Idea();

      idea.set("content", payload.content);
      idea.set("user", this.getUser());

      return idea.save();
    };

    this.loginWithFacebook = function() {

      

      var deferred = $q.defer();

      Parse.FacebookUtils.logIn(null, {
        success: function(user) {
          deferred.resolve(user);
        },
        error: function(user, error) {
          deferred.reject(error);
        }
      });

      return deferred.promise;
    };

    this.voteOnIdea = function(userAnswer, question) {
      var Answer = Parse.Object.extend("Answer"),
          answer = new Answer();

      answer.set("response", userAnswer);
      answer.set("question", question);
      answer.set("user", this.getUser());

      return answer.save();
    };

  }


  //Inject the auth service dependencies
  ParseService.$inject = ['$q'];

  //Create Module
  angular
    .module('cleverr.parse', [])
    .service('ParseService', ParseService);

})();

