(function(){
    angular.module("app", []);
})();

(function(){
    var mainController = function($scope){
        console.log($scope);
        
    
    };
    mainController.$inject = ['$scope'];
    angular.module("app").controller("mainController", mainController);
})();