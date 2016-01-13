(function () {
  'use strict';

  function ParseService() {

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

    this.shareIdea = function (payload) {
      var Idea = Parse.Object.extend("Question"),
        idea = new Idea();

      idea.set("content", payload.content);
      idea.set("user", this.getUser());

      return idea.save();
    };

  }


  //Inject the auth service dependencies
  ParseService.$inject = [];

  //Create Module
  angular
    .module('cleverr.parse', [])
    .service('ParseService', ParseService);

})();

