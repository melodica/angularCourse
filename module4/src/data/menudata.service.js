(function(){
  'use strict'
  angular.module('data')
    .service('menuDataService', MenuDataService)
    .constant('ROOT_URL', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'ROOT_URL'];
  function MenuDataService($http, ROOT_URL){
    var service = this;

    service.getAllCategories = function(){
      return $http.get(ROOT_URL + 'categories.json');
    }

    service.getItemsForCategory = function(categoryShortName){
      return $http.get(ROOT_URL + 'menu_items.json?category=' + categoryShortName);
    }

  }


})();
