app.controller('getRulesController', function ($scope, $location, $timeout) {
    $timeout(function () {
        $location.path('rules-in-play');
    }, 2000);
});