angular.module('omdbSearch', ['ngRoute']);

angular.module('omdbSearch').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html',
      controller: 'HomeController'
    })
    .when('/:title', {
      templateUrl: '../partials/search.html'
    })
    .when('/show/:imdbID', {
      templateUrl: '../partials/movie.html'
    });
  $locationProvider.html5Mode(true);
});