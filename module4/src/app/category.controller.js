(function(){
  angular.module('menuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories']
    function CategoriesController(categories){
      var vm = this;
      vm.category = categories;
    }
})();
