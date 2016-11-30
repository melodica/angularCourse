(function(){
  'use strict'
  angular.module('menuApp')
    .component('itemsList', {
      templateUrl: 'src/item/items.component.html',
      bindings: {
        items : '<'
      }
    });
})();
