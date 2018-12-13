angular.module('app', [])
  .controller('myCtrl', function($scope) {
    angular.extend(this, {})
    $scope.initialize = function() {
      var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      $scope.arr = []

      for(var i = 0; i < 40; i++) {
        var text = ''
        for (var ii = 0; ii < 14; ii++) {
          text += str.charAt(Math.floor(Math.random() * str.length))
          if(ii === 11) {
            text = text + ' ' + text
          }
        }
        $scope.arr.push(text)
      }
    }

    angular.element(document).ready(function () {})
  })
