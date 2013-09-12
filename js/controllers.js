'use strict'; /* Controllers */
angular.module('talkieTrot.controllers', []).
controller('homepage', ['$scope', function($scope) {
    $scope.openNav = function() {
        $('.navbar-responsive-collapse').addClass('in');
    };
    $scope.cycleAndCountdown = function() {
        $('.cycle').cycle({
            fx: 'fade',
            prev: '.prev',
            next: '.next'
        });
        $('#countdown_dashboard').countDown({
            targetDate: {
                'day': 15,
                'month': 9,
                'year': 2013,
                'hour': 1,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
    };
}]).controller('contentPages', ['$scope', function($scope) {
    $scope.countDownTimer = function() {
        $('#countdown_dashboard').countDown({
            targetDate: {
                'day': 15,
                'month': 9,
                'year': 2013,
                'hour': 1,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
    }
}]);