/*jshint unused: vars */
define(['angular', 'controllers/home', 'controllers/product','filters/filters', 'services/services']/*deps*/, function (angular, HomeCtrl, Ctrl, services)/*invoke*/ {
  'use strict';

  return angular
    .module('eCommerceApp', ['eCommerceApp.controllers.HomeCtrl',
'eCommerceApp.controllers','eCommerceApp.services','eCommerceApp.filters','ngCookies','ngResource','ngSanitize','ui.router','ngAnimate','ngTouch'])
    .value('name', 'panasonic')
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'main-view': {
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl',
              controllerAs: 'departmentsVm'
            }
          }
        })
        .state('product', {
          url: '/product/:id',
          views: {
            'main-view': {
              templateUrl: 'views/product.html',
              controller: 'ProductCtrl',
              controllerAs: 'productVm',
              resolve: {
              selectedProductData: function($state,$stateParams) {
                return {
                  'id': $stateParams.id
                };
              }
            }
            }
          }
        })
        .state('cart', {
          url: '/cart',
          views: {
            'main-view': {
              templateUrl: 'views/cart.html',
              controller: 'CartCtrl',
              controllerAs: 'cartVm'
            }
          }
        })
        .state('checkout', {
          url: '/checkout',
          views: {
            'main-view': {
              templateUrl: 'views/checkout.html',
              controller: 'CartCtrl',
              controllerAs: 'cartVm'
            }
          }
        })
        .state('otherwise', {
          url: '*path',
          views: {
            'main-view': {
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl',
              controllerAs: 'departmentsVm'
            }
          }
        });
    });
});
