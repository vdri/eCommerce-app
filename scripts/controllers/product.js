define(['angular'], function (angular) {
  'use strict';
  
  angular.module('eCommerceApp.controllers', [])
    .controller('ProductCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    'productService',
    'selectedProductData',
    ProductCtrl
  ]);

  function ProductCtrl(
    $rootScope,
    $scope,
    $state,
    productService,
    selectedProductData
  ) {
    var productVm = this;

    productService.find(selectedProductData.id, function(data) {
      productVm.product = data;
    });

    productVm.addCart = addCart;

    $scope.quantity = [1,2,3,4,5,6];

    function addCart(quantity) {
      if (typeof sessionStorage.getItem(selectedProductData.id) == "undefined") {
        sessionStorage.setItem(selectedProductData.id, 0);
      }
      sessionStorage.setItem(selectedProductData.id, Number(sessionStorage.getItem(selectedProductData.id)) + Number(quantity));
      $state.transitionTo('cart', {
        id: selectedProductData.id
      });
    }

    $scope.$on('$destroy', function() {
      productVm = null;
    });

    }




  angular.module('eCommerceApp.controllers')
    .controller('CartCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    'productService',
    CartCtrl
  ]);

  function CartCtrl(
    $rootScope,
    $scope,
    $state,
    productService
  ) {
    var cartVm = this;
    cartVm.removeItem = removeItem;


    productService.list(function(data) {
      cartVm.cartList = data;
    });

    function removeItem(selectedDepartment) {
      sessionStorage.setItem(selectedDepartment.id, 0);
      $state.transitionTo('cart');
    }

    $scope.$on('$destroy', function() {
      cartVm = null;
    });

    }


    angular.module('eCommerceApp.controllers')
    .controller('CheckoutCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    'productService',
    CheckoutCtrl
  ]);

  function CheckoutCtrl(
    $rootScope,
    $scope,
    $state,
    productService
  ) {
    var checkoutVm = this;

    productService.list(function(data) {
      checkoutVm.cartList = data;
    });

    $scope.$on('$destroy', function() {
      checkoutVm = null;
    });

    }
});
