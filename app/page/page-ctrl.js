angular.module('TaoApp').controller('PageCtrl', ['$scope', '$http', '$routeParams', '$sce',
    function ($scope, $http, $routeParams, $sce) {
        
        $scope.activeIndex = $routeParams.number - 1 || 0;

        $http.get('/data/tao.json').success(function(data) {
            $scope.tao = data.pages;
            $scope.pages = [];
            $scope.cyclePage.toIndex($scope.activeIndex);
        });

        $scope.toggleActiveClass = function () {
            $scope.activeClass = false;
            $scope.activeClass = true;
        };

        $scope.cyclePage = {
            toIndex: function (index) {
                $scope.activePage = $scope.tao[index];
            },
            toNext: function () {
                var nextPage = $scope.activeIndex + 1;
                if (nextPage >= $scope.tao.length) {
                    nextPage = 0;
                } 
                $scope.activePage = $scope.tao[nextPage];
            },
            toPrevious: function () {
                var previousPage = $scope.activeIndex - 1;
                if (previousPage < 0) {
                    previousPage = $scope.tao.length - 1;   
                }
                $scope.activePage = $scope.tao[previousPage];
            }
        };

        $scope.isActiveItem = function(index) {
            return index === $scope.activeIndex;
        };     
}]);
