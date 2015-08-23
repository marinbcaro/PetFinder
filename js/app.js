var myApp = angular.module('myApp', [
    'ngRoute',
    'petControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/petList.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/petDetails.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);

myApp.directive("mySrc", function() {
    return {
        link: function(scope, element, attrs) {
            var img, loadImage;
            img = null;
            loadImage = function() {
                img = new Image();
                img.src = attrs.mySrc;
                img.onload = function() {
                    element[0].src = attrs.mySrc;
                };
            };
            scope.$watch((function() {
                return attrs.mySrc;
            }), function(newVal, oldVal) {
                if (oldVal !== newVal) {
                    loadImage();
                }
            });
        }
    };
});