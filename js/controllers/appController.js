angular.module('app').controller("appController", appController);

function appController() {
  var vm = this;
  vm.progress = 10;
  vm.capacity = 30;
  vm.free = false;
  vm.type = "Disability";

}