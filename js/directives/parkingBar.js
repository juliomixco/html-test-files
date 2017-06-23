angular.module('app').directive("parkingBar", parkingBar);
function parkingBar() {
  return {
    restrict: 'E',
    templateUrl: 'js/templates/parking-bar.tpl.html',
    scope: {
      type: '=',
      capacity: '=',
      occupancy: '='
    },
    link: link
  };

  function link(scope, element, attrs) {
    var chartElement;


    init();

    scope.$watch('[capacity, occupancy]', function () {
      scope.progress = progress();
    }, true);
    function progress() {
      scope.capacity = scope.capacity ? scope.capacity : 0;
      scope.occupancy = scope.occupancy ? scope.occupancy : 0;
      if (scope.occupancy == 0) return 0;
      return scope.occupancy / scope.capacity;
    }

    function init() {
      scope.progress = progress();

    }


  }
}