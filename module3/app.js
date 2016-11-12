(function(){
  angular
    .module('myApp', [])
    .controller('NarrowDownController', NarrowDownController)
    .directive('foundItems', FoundItems)
    .service('MenuService', MenuService)

    MenuService.$inject = ['$http'];
    function MenuService($http){
      var service = this;
      var MENU_URL = 'https://davids-restaurant.herokuapp.com/menu_items.json';
      service.getMatchedMenuItems = function(searchTerm){
          return $http({
                    method: 'GET',
                    url: MENU_URL
                  }).then(
                    function(response){
                      return searchTerm.length === 0 ? [] : response.data.menu_items.filter(record => record.description.indexOf(searchTerm.toLowerCase()) != -1);
                    },
                    function(response){
                      return [];
                  });
      }
    }

    NarrowDownController.$inject = ['MenuService'];
    function NarrowDownController(MenuService){
      var vm = this;
      vm.searchTerm = "";
      var init = function(){
        vm.items = [];
        vm.showList = false;
        vm.loading = false;
      }

      vm.narrowDown = function(){
        init();
        vm.loading = true;
        MenuService.getMatchedMenuItems(vm.searchTerm).then(function(result){
          vm.items = result;
          vm.showList = true;
          vm.loading = false;
        });
      };

      vm.removeItem = function(index){
        vm.items.splice(index, 1);
      }

      init();
    }

    function FoundItems(){
      return {
          restrict : 'E',
          scope : {
            foundItems : '<',
            onRemove : '&',
            message : '@'
          },
          templateUrl : 'foundItemsDirective.html'
      };
    }

})();
