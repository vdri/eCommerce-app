define(['angular'], function (angular) {
  'use strict';
  
  angular.module('eCommerceApp.filters', [])
  .filter('cartFilter', function() {

  return function(input) {
    var out = [];
    angular.forEach(input, function(department){

      if (sessionStorage.getItem(department.id) != null && sessionStorage.getItem(department.id) != 0) {
        department.quantity = sessionStorage.getItem(department.id);
        out.push(department);
      }
    })
    return out;
  }

});

   angular.module('eCommerceApp.filters').filter("checkEmpty", function(){ 
    return function(input){
      if(input.length == 0) {
        return true;
      } else {
        return false;
      }
  }});

});
