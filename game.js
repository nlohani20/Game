var app = angular.module('gameApp', []);
app.controller('GameController', ['$scope', function($scope) {
  // Initializing Game
  $scope.generatedNumbers = [];
  $scope.total = 0;

  // Function which returns Random number between 0 to 100
  $scope.getRandomNumber = function(){
    return Math.round(Math.random() * 100);
  }

  // Setting Target to some Random number
  $scope.targetScore = $scope.getRandomNumber();

  // Function which returns total sum of generated numbers
  // $scope.getSum = function(){
  //   $scope.totalSum = 0;
  //   $scope.arrLen = $scope.generatedNumbers.length;
  //   for(var i=0; i<$scope.arrLen; i++){
  //     $scope.totalSum += $scope.generatedNumbers[i];
  //   }
  //   return $scope.totalSum;
  // }
    
  // Function which generate random number and push it into Array of generatedNumbers
  $scope.randomNumberGenerator = function(){
    var randomNumber = $scope.getRandomNumber();
    $scope.generatedNumbers.push(randomNumber);
    $scope.total += randomNumber;
  }

  // Function which removes particular random Number from Array of generatedNumbers
  $scope.removeGeneratedNumber = function(index){
    $scope.total -= $scope.generatedNumbers[index];
    $scope.generatedNumbers.splice(index,1);
  }

  // Function which reset the whole Game
  $scope.resetGame = function(){
    $scope.targetScore = $scope.getRandomNumber();
    $scope.generatedNumbers = [];
    $scope.total = 0;
  }

}]);