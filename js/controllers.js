var petControllers = angular.module('petControllers', []);

petControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
   $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1').success(function(data) {
    $scope.photos = data.photos.photo;
    $scope.petOrder = 'title';
  });
}]);

petControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
   $http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1').success(function(data) {

    $scope.photos = data.photos.photo;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.photos.length-1;
    }

    if ($routeParams.itemId < $scope.photos.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

