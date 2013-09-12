'use strict';


// Declare app level module which depends on filters, and services
angular.module('talkieTrot', ['talkieTrot.filters', 'talkieTrot.services', 'talkieTrot.directives', 'talkieTrot.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homepage'});

    
    $routeProvider.when('/register-online', {templateUrl: 'partials/register-online.html', controller: 'contentPages'});
    $routeProvider.when('/register-success', {templateUrl: 'partials/register-success.html', controller: 'contentPages'});
    $routeProvider.when('/event-information', {templateUrl: 'partials/event-information.html', controller: 'contentPages'});
    $routeProvider.when('/course-map', {templateUrl: 'partials/course-map.html', controller: 'contentPages'});

    $routeProvider.when('/inspiration', {templateUrl: 'partials/inspiration.html', controller: 'contentPages'});

    $routeProvider.when('/charity-donate', {templateUrl: 'partials/charity-donate.html', controller: 'contentPages'});

    $routeProvider.when('/sponsors', {templateUrl: 'partials/sponsors.html', controller: 'contentPages'});
    $routeProvider.when('/sponsor-opportunities', {templateUrl: 'partials/sponsor-opportunities.html', controller: 'contentPages'});
    $routeProvider.when('/sponsor-success', {templateUrl: 'partials/sponsor-success.html', controller: 'contentPages'});


    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
