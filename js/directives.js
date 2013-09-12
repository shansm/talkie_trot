'use strict';
/* Directives */
angular.module('talkieTrot.directives', []).
	directive('page', ['$timeout', function(timer) {
    return {
      restrict: 'E',
      link: function (scope, elem, attrs) {
    	var addActive = function(){
    		$('.navbar-nav > li').removeClass('active');
    		$('.navbar-nav > li.'+attrs.pageValue).addClass('active');
    	}
    	timer(addActive,500)
      }
    }
}]);