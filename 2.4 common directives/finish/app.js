(function(){
    angular.module('app', []);
})();


(function(){
    let mainController = function($scope, $filter){
        $scope.handle = '';
    
        $scope.lowercasehandle = function() {
            return $filter('lowercase')($scope.handle);
        };

        $scope.characters = 5;

        $scope.rules = [

            { rulename: "Must be 5 characters" },
            { rulename: "Must not be used elsewhere" },
            { rulename: "Must be cool" }

        ];

        console.log($scope.rules);
    }
    mainController.$inject = ['$scope', '$filter'];
    angular.module('app').controller('mainController', mainController);
})();
