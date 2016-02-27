(function () {
  'use strict';

  function VotesController(Votes) {
    var vm = this;
    vm.votes = Votes;
  }

  VotesController.$inject = ['Votes'];

  angular.module('cleverr.votes.controller', [])
    .controller('VotesController', VotesController);

})();
