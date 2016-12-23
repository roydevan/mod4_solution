(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemDetail = this;

  itemDetail.item = items.menu_items;
  itemDetail.name = items.category.name;
}

})();
