(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;
  var items = [];

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    })
    .then(function (response){
      // console.log(response.data);
      return response.data;
    })

  };
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: categoryShortName
      }
    })
    .then(function (response){
      var found = [];
      for (var i = 0; i < response.data.menu_items.length; i++) {
        var name = response.data.menu_items[i].description;
          var item = {
            short_name: response.data.menu_items[i].short_name,
            name: response.data.menu_items[i].name,
            description: response.data.menu_items[i].description
          };
          found.push(item);
  }
  return found;


    })

    return response;
  };

}




})();
