(function () {
  'use strict';

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cleverr', {
        url: '',
        abstract: true,
        views: {
          "@": {
            templateUrl: "/layout/shell.html"
          }
        }
      });

    //.state('app.search', {
    //  url: '/search',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/search.html'
    //    }
    //  }
    //})
    //
    //.state('app.browse', {
    //  url: '/browse',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/browse.html'
    //    }
    //  }
    //})
    //
    //.state('app.playlists', {
    //  url: '/playlists',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/playlists.html',
    //      controller: 'PlaylistsCtrl'
    //    }
    //  }
    //})
    //
    //.state('app.single', {
    //  url: '/playlists/:playlistId',
    //  views: {
    //    'menuContent': {
    //      templateUrl: 'templates/playlist.html',
    //      controller: 'PlaylistCtrl'
    //    }
    //  }
    //});


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  }

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('cleverr.routes', ['ui.router'])
    .config(routes);

})();


// TODO - FINISH CONVERTING LOGIN DIRECTIVE TO PAGE TO GET RID OF CONSOLE ERROR
