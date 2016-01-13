(function () {
  'use strict';

  function emailLogin($ionicModal, ParseService) {

    function link($scope) {
      $scope.loginData = {};

      $ionicModal.fromTemplateUrl('/components/login/login.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });

      $scope.control.openLogin = function () {
        $scope.modal.show();
      };

      // Triggered in the login modal to close it
      $scope.closeLogin = function () {
        $scope.modal.hide();
      };

      $scope.doLogin = function () {
        //do validation
        ParseService.login(vm.loginData).then(function(response) {
          console.log(response);
        }, function(error) {
          console.log(error);
        })
      }

    }

    link.$inject = ['$scope'];

    var directive = {
      restrict: 'AE',
      link: link,
      scope: {
        control: '='
      }
    };

    return directive;
  }

  emailLogin.$inject = ['$ionicModal', 'ParseService'];

  angular.module('cleverr.login', ['cleverr.parse'])
    .directive('emailLogin', emailLogin);

})();
