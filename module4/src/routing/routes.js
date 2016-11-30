(function(){
  angular
    .module('menuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        // *** Set up UI states ***
        $stateProvider
        // Home page
        .state('home', {
          url: '/',
          templateUrl: 'src/app/app.home.html'
        })

        // Premade list page
        .state('categories', {
          url: '/categories',
          templateUrl: 'src/app/app.category.html',
          controller: 'CategoriesController as categoriesList',
          resolve: {
            categories: ['menuDataService', function (menuDataService) {
              return menuDataService.getAllCategories().then(function(response){
                return response.data;
              });
            }]
          }
        })

        .state('items', {
          url: '/items/{categoryName}',
          templateUrl: 'src/app/app.item.html',
          controller: 'MenuItemController as itemList',
          resolve: {
            items : ['$stateParams', 'menuDataService',
                    function($stateParams, menuDataService){
                      return menuDataService.getItemsForCategory($stateParams.categoryName)
                      .then(function(response){
                          return response.data.menu_items;
                      });
                    }
            ]
          }
        });
    }
})();
