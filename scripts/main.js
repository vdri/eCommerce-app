/*jshint unused: vars */
require.config({
  paths: {
    angular: 'lib/angular/angular',
    'angular-animate': 'lib/angular-animate/angular-animate',
    'angular-aria': 'lib/angular-aria/angular-aria',
    'angular-cookies': 'lib/angular-cookies/angular-cookies',
    'angular-messages': 'lib/angular-messages/angular-messages',
    'angular-mocks': 'lib/angular-mocks/angular-mocks',
    'angular-resource': 'lib/angular-resource/angular-resource',
    'angular-sanitize': 'lib/angular-sanitize/angular-sanitize',
    'angular-touch': 'lib/angular-touch/angular-touch',
    'angular-ui-route': 'lib/angular-ui-router/release/angular-ui-router',
    bootstrap: 'lib/bootstrap/dist/js/bootstrap',
    'angular-route': 'lib/angular-route/angular-route',
    'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-ui-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-ui-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch'
], function(angular, app, uiRouter, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
