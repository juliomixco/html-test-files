angular.module('app').directive("parkingOccupancy", parkingOccupancy);
function parkingOccupancy() {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/parking-occupancy.tpl.html',
    scope: {
      capacity: '=',
      occupancy: '=',
      type: '='
    },
    link: link
  };

  function link(scope, element, attrs) {
    scope.progress = progress();
    scope.$watch('[capacity, occupancy]', function () {
      scope.progress = progress();
    }, true);
    function progress() {
      scope.capacity = scope.capacity ? scope.capacity : 0;
      scope.occupancy = scope.occupancy ? scope.occupancy : 0;
      if (scope.occupancy == 0) return 0;
      return scope.occupancy / scope.capacity;
    }



  }
}