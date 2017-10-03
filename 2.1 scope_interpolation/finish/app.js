(function(){
    angular.module("app", []);
})();

(function(){
    var mainController = function($scope){
        $scope.name = "Marko Markovic";
        $scope.occupation = "Web Programmer";
        $scope.getName = ()=>{
            return $scope.name;
        }
    };
    mainController.$inject = ['$scope'];
    angular.module("app").controller("mainController", mainController);
})();