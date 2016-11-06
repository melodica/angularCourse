(function(){
  angular.module('myApp', [])
    .controller('ToBuyController', BuyListCtrl)
    .controller('AlreadyBoughtController', BoughtListCtrl)
    .service('ShoppingListCheckOffService', CheckOffService);

    BuyListCtrl.$inject = ['ShoppingListCheckOffService'];
    BoughtListCtrl.$inject = ['ShoppingListCheckOffService'];

    function BuyListCtrl(ShoppingListCheckOffService){
      var buyList = this;
      buyList.items = ShoppingListCheckOffService.getShoppingItems();
      buyList.buyItem = function(index){
        ShoppingListCheckOffService.buyItem(index);
      }
    }

    function BoughtListCtrl(ShoppingListCheckOffService){
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function CheckOffService(){
      var checkListService = this;
      var shoppingItems = [];
      var boughtItems = [];

      checkListService.buyItem = function(index){
          boughtItems.push(shoppingItems[index]);
          shoppingItems.splice(index, 1);
      }
      checkListService.getShoppingItems = function(){
        return shoppingItems;
      }
      checkListService.getBoughtItems = function(){
        return boughtItems;
      }

      function addItem(itemName, itemQuantity){
        var item = {
          name : itemName,
          quantity: itemQuantity
        };
        shoppingItems.push(item);
      }
      var init = function(){
        addItem("Cookies", "10");
        addItem("Crackers", "2");
        addItem("Cokes", "20");
        addItem("Apples", "5");
        addItem("Bananas", "1");
        addItem("Milk", "1");
      }
      init();
    }
})();
