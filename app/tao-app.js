angular.module('TaoApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    'use strict';

    $routeProvider
    .when('/:number', {
        templateUrl: '/page/page.html',
        controller: 'PageCtrl'
    });

    $locationProvider.html5Mode(true);

}])

.run([function () {}])

.filter('parseHTML', ['$sce', function($sce) { 
    return $sce.trustAsHtml; 
}]);