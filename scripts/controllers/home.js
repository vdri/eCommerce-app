define(['angular'], function (angular) {
  'use strict';

  angular.module('eCommerceApp.controllers.HomeCtrl', [])
    .controller('HomeCtrl', [
    '$rootScope',
    '$scope',
    '$state',
    '$timeout',
    '$location',
    'productService',
    HomeCtrl
  ]);

    function HomeCtrl(
    $rootScope,
    $scope,
    $state,
    $timeout,
    $location,
    productService
  ) {
    var departmentsVm = this;

    productService.list(function(data) {
      departmentsVm.departmentList = data;
    });

    departmentsVm.departmentClicked = departmentClicked;
    departmentsVm.addToCart = addToCart;

    $scope.$on('$destroy', function() {
      departmentsVm = null;
    });

    function departmentClicked(selectedDepartment) {
      $state.transitionTo('product', {
        id: selectedDepartment.id,
        deprtmtName: selectedDepartment.name
      });
    }

    function addToCart(selectedDepartment) {
      if (typeof sessionStorage.getItem(selectedDepartment.id) == "undefined") {
        sessionStorage.setItem(selectedDepartment.id, 0);
      }
      sessionStorage.setItem(selectedDepartment.id, Number(sessionStorage.getItem(selectedDepartment.id)) + 1);
      $state.transitionTo('cart', {
        id: selectedDepartment.id
      });
    }

  }

});
