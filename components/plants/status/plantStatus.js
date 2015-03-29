angular.module('gardenTracker').directive('plantStatus', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/plants/status/plant-status.html',
        controller: function ($scope) {
            $scope.editable = false;

            $scope.statusLabel = function (status) {
                for (var i in $scope.statuses) {
                    if ($scope.statuses[i].name == status) {
                        return $scope.statuses[i].class;
                    }
                }
            };

            $scope.editStatus = function (plant) {
                plant.editing = true;
            };

            $scope.cancelEditStatus = function (plant) {
                plant.editing = false;
            };

            $scope.updateStatus = function (plant) {
                plant.statuses.push(
                    {
                        name: plant.status.name,
                        date: new Date()
                    }
                );

                plant.editing = false;
                plant.status = false;
            };

            $scope.editingStatus = function (plant) {
                return plant.editing;
            }
        },
        controllerAs: 'plantStatusCtrl'
    }
})
.directive('editable', function() {
  return {
      require: '^plantStatus',
      restrict : 'A',
      link: function($scope) {
          $scope.editable = true;
      }
  }
})
.filter('latest', function(orderByFilter) {
   return function (input) {
       return orderByFilter(input, '-date')[0];
   };
});