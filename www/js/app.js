var app = angular.module('houseRules', ['ionic']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/menu.html'
        , controller: 'houseRulesController'
    }).when('/get-rules', {
        templateUrl: 'pages/get-rules.html'
        , controller: 'getRulesController'
    }).when('/rules-in-play', {
        templateUrl: 'pages/rules-in-play.html'
    }).when('/summary-of-rule', {
        templateUrl: 'pages/summary-of-rule.html'
    }).otherwise({
        redirectTo: '/'
    });
});