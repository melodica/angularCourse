(function(){
  angular
    .module('myApp', [])
    .controller('lunchCheckController', myController);

    lunchCheckController.$inject = ['$scope'];
    function myController($scope){
      $scope.message = "";
      $scope.lunch = "";
      $scope.items = [];

      $scope.checklunch = function(){
         $scope.items = $scope.lunch.split(/\s*,\s*/).filter(item => item);
         var num = $scope.items.length;
         if( num == 0){
           $scope.message = "Please enter valid lunch item first!";
           $scope.checkResult = "has-error";
         }else if( num > 0 && num <= 3){
           $scope.message = "Enjoy!";
           $scope.checkResult = "has-success";
         }else if( num > 3){
           $scope.message = "Too much!";
           $scope.checkResult = "has-success";
         }
       }
    }
})();
