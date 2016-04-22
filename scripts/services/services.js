define(['angular'], function (angular) {
  'use strict';

  angular.module('eCommerceApp.services', [])
    .factory('productService', function($http){

  function getData(callback){
    $http({
      method: 'GET',
      url: 'scripts/services/products.json',
      cache: true
    }).success(callback);
  }

  return {
    list: getData,
    find: function(serialNumber, callback){
      getData(function(data) {
        var index = parseInt(serialNumber) - 1;
        callback(data[index]);
      });
    }
  };

});

});
