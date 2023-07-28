const app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function () {
    if ($scope.newItem) {
      $scope.items.push($scope.newItem);
      $scope.newItem = '';
    }
  };
});

function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test the function
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [10, 20, 30];

console.log('Sum of testArray1:', sumArray(testArray1)); // Should output: 15
console.log('Sum of testArray2:', sumArray(testArray2)); // Should output: 60
