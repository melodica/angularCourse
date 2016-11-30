(function(){
  'use strict'
  angular.module('menuApp')
    .component('categoriesList', {
      templateUrl: 'src/category/categories.component.html',
      bindings: {
        categories : '<'
      }
    });
})();
