angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
.controller('ChuController', function ($scope, $route) { $scope.$route = $route;})
.controller('BumperController', function ($scope, $route) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    }).
    when('/chu', {
        templateUrl: 'chu.html',
        controller: 'ChuController'
    }).
    when('/chu/1', {
        templateUrl: 'chu/1.html',
        controller: 'ChuController'
    }).
    when('/bumper', {
        templateUrl: 'bumper.html',
        controller: 'BumperController'
    }).
    when('/bumper/1', {
        templateUrl: 'bumper/1.html',
        controller: 'BumperController'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

angular.module('myApp', ['ngAnimate']);