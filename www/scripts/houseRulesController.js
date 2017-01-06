app.controller('houseRulesController', function ($scope) {
    $scope.randomRule = undefined;
    $scope.rule = undefined;
    $scope.ruleSelected = false;
    var rules = [{
        "name": "Free Parking"
        , "image": "https://s-media-cache-ak0.pinimg.com/originals/26/89/29/2689290b35f32a34aaf13ae7020f6b57.jpg"
        , "details": "Take this to Sainsbury's and park in a disabled bay."
        }, {
        "name": "Free Parking"
        , "image": "https://s-media-cache-ak0.pinimg.com/originals/26/89/29/2689290b35f32a34aaf13ae7020f6b57.jpg"
        , "details": "Take this to Sainsbury's and park in a disabled bay."
        }, {
        "name": "Go!"
        , "image": "http://vignette2.wikia.nocookie.net/monopoly/images/9/91/Go-.gif/revision/latest?cb=20071004123654"
        , "details": "Collect £10,000 when you pass go "
        }, {
        "name": "Chance"
        , "image": "https://s-media-cache-ak0.pinimg.com/236x/23/3e/ff/233eff1a0bcd8812bf8ba73fd94235bc.jpg"
        , "details": "Take a chance! blah blah"
        }];
    $scope.roll = function () {
        $scope.randomRule = randomIntFromInterval(1, rules.length);
        $scope.name = rules[$scope.randomRule].name;
        $scope.image = rules[$scope.randomRule].image;
        $scope.details = rules[$scope.randomRule].details;
        $scope.ruleSelected = true;
    };

    var randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});