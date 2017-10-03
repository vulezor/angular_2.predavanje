(function(){
    angular.module("app", ['ngMessages']);
})();

(function(){
    var mainController = function($scope, $log, $filter){
        console.log($scope);
        console.log($log)
        
        $log.log("This is default console text");
        $log.info("This is text for info");
        $log.warn("This is text for Warning");
        $log.error("This is text for error");
        
        $scope.name = "Marko Markovic"
        $scope.formattedname = $filter('uppercase')($scope.name);
        $log.log($scope.formattedname)
    
    };
    mainController.$inject = ['$scope', '$log', '$filter'];
    angular.module("app").controller("mainController", mainController);
})();