(function(){
  'use strict'
  angular
    .module('menuApp')
    .controller('menuController', MenuController);

    MenuController.$inject = ['menuDataService']
    function MenuController(menuDataService){
      var vm = this;
      vm.categories = [];
      vm.items = [];

      vm.getCategories = function(){
        menuDataService.getAllCategories().then(function(response){
          vm.categories = response.data;
        });
      };

      vm.showItems = function(categoryName){
        menuDataService.getItemsForCategory(categoryName).then(function(response){
          vm.items = response.data.menu_items;
        });
      }

    }


})();
