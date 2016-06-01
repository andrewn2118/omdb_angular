angular.module('omdbSearch').controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http', '$location'];

  function HomeController($scope, $http, $location){
    window.HomeScope = $scope;
    $scope.vm = {};

    $scope.searchAll = function(){
      $http.get(`http://www.omdbapi.com/?s=${$scope.vm.searchTitles}`)
        .then(function(res){
          $location.path(`/${$scope.vm.searchTitles}`);
          $scope.results = res.data.Search;
          $scope.vm = {};
        });
    }

    $scope.searchMovie = function(imdbID){
      $http.get(`http://www.omdbapi.com/?i=${imdbID}`).then(function(res){
        $location.path(`/show/${imdbID}`);
        $scope.movie = res.data;
        console.log($scope.movie);
      });
    }
  }

// angular.module('omdbSearch').controller('SearchController', SearchController);

//   SearchController.$inject = ['$scope', '$http', '$location'];

//   function SearchController($scope, $http, $location){
//     $scope.searchMovie = function(imdbID){
//       $http.get(`http://www.omdbapi.com/?i=${imdbID}`).then(function(res){
//         $scope.movie = res.data
//         $location.path(`/show/${imdbID}`);
//       });
//     }
//   }

// angular.module('omdbSearch').controller('IdController', IdController);

//   IdController.$inject = ['$scope', '$http', '$location'];

//   function IdController($scope, $http, $location){

//   }