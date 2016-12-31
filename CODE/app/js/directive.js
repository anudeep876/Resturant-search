var app = angular.module("myApp", []);
app.directive("testDirective", function() {
    return {
        template : "<button id='btn' ng-click='show = !show'>SHOW RESULTS IN MAP/LIST</button>" +
        "<div id='map' ng-show='!show'></div>"+
    "<div id='list' ng-show='show' style='float: left; width: 45%;'></div>" +
    "<div id='list1' ng-show='show' style='float: right; width: 45%;'></div>"
    };
});

app.controller('myCtrl', function($scope){ //to show hide the list and maps
      $scope.show=false;
  });