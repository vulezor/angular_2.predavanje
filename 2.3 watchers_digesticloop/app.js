(function(){
    angular.module("app", []);
})();

(function(){
    var mainController = function($scope, $filter){
        $scope.handle = ""
        $scope.lowercasehandle = function(){
            return $filter('lowercase')($scope.handle);
        }
    };
    mainController.$inject = ['$scope', '$filter'];
    angular.module("app").controller("mainController", mainController);
})();