angular.module('app').directive("progressBar", progressBar);
function progressBar() {
  return {
    restrict: 'E',
    scope: {
      progress: '='
    },
    link: link
  };

  function link(scope, element, attrs) {
    var chartElement;


    init();

    scope.$watch('progress', function () {
      updateProgress();
    }, true);

    function updateProgress() {

      scope.bar.animate(scope.progress);
    }

    function init() {
      scope.progress = scope.progress ? scope.progress : 0;
      var chartElement = document.createElement("div");
      chartElement.className = "progress-bar";
      //chartElement = angular.element('<div class="progress"></div>');
      element.append(chartElement);
      scope.bar = new ProgressBar.Line(chartElement, {
        color: '#F4938A',
        trailColor: '#BBE7E3',
        trailWidth: 5,
        strokeWidth: 5,
        duration: 1400,
        easing: 'easeOut',

      });
      scope.bar.animate(scope.progress);  // Number from 0.0 to 1.0
    }


  }
}