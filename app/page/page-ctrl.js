angular.module('TaoApp').controller('PageCtrl', ['$scope', '$http', '$routeParams', '$location', '$sce',
    function ($scope, $http, $routeParams, $location, $sce) {
        
        $scope.activeIndex = parseInt($routeParams.number) - 1 || 0;

        $http.get('/data/tao.json').success(function(data) {
            $scope.tao = data.pages;
            $scope.pages = [];
            $scope.cyclePage($scope.activeIndex);
        });

        $scope.toggleActiveClass = function () {
            $scope.activeClass = false;
            $scope.activeClass = true;
        };

        // pass 'previous', 'next', or an integer where integer is the exact index you want.
        $scope.cyclePage = function (direction) {
            if (direction === 'next') {
                $scope.activeIndex += 1;
                
                if ($scope.activeIndex >= $scope.tao.length) {
                    $scope.activeIndex = 0;
                }
            } else if (direction === 'previous') {
                $scope.activeIndex -= 1;
                
                if ($scope.activeIndex < 0) {
                    $scope.activeIndex = $scope.tao.length - 1;   
                }
            } else if (typeof direction === 'number') {
                $scope.activeIndex = direction;
            }
            
            $scope.activePage = $scope.tao[$scope.activeIndex];
            $location.path($scope.activeIndex + 1);
        };

        $scope.isActiveItem = function(index) {
            return index === $scope.activeIndex;
        };     
}]);
