angular.module('app').directive("progressCircle", progressCircle);
function progressCircle() {
  return {
    restrict: 'E',
    scope: {
      progress: '='
    },
    link: link
  };

  function link(scope, element, attrs) {
    var progress;
    var chartElement;


    init();
    scope.$watch('progress', function (value) {
      //format = value;
      updateProgress();
    });

    function updateProgress() {

      scope.bar.animate(scope.progress);
    }
    function init() {
      scope.progress = scope.progress ? scope.progress : 0;
      var chartElement = document.createElement("div");
      chartElement.className = "progress-circle";
      //chartElement = angular.element('<div class="progress"></div>');
      element.append(chartElement);
      scope.bar = new ProgressBar.Circle(chartElement, {
        color: '#2DB9B0',
        trailColor: '#BCE6E2',
        trailWidth: 12,
        duration: 1400,
        easing: 'easeOut',
        strokeWidth: 20,
        from: { color: '#2DB9B0', a: 0 },
        to: { color: '#F6CA5E', a: 0.9 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          var value = circle.value();
          // console.log(circle.value() * 100);
          // if (value > 0.99) {
          //   circle.path.setAttribute('stroke', '#EF464D');
          // } else if (value > 0.96) {
          //   circle.path.setAttribute('stroke', '#ED6A5A');
          // } else if (value > 0.8) {
          //   circle.path.setAttribute('stroke', '#F6CA5E');
          // } else if (value > 0.6) {
          //   circle.path.setAttribute('stroke', '#B1C47A');
          // } else {
          //   circle.path.setAttribute('stroke', '#2DB9B0');
          // }
          if (value > 0.99) {
            circle.path.setAttribute('stroke', '#EF464D');
          } else {
            circle.path.setAttribute('stroke', '#2DB9B0');
          }
          // circle.path.setAttribute('stroke', state.color); B1C47A
        }
      });
      scope.bar.animate(scope.progress);  // Number from 0.0 to 1.0
    }


  }
}