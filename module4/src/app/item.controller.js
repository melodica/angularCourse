(function(){
  angular.module('menuApp')
    .controller('MenuItemController', MenuItemController);

  MenuItemController.$inject = ['items'];
  function MenuItemController(items){
    var vm = this;
    vm.menuItems = items;
  }
})();
