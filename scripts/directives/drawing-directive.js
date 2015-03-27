'use strict';
function drawingDirective() {//Generate circles elements representing cities.
	return {
		templateNamespace:'svg',
		templateUrl: 'views/circles-template.html',
			link: function(scope, element, attrs) {//ng-click="svg.clickedCity($event);"
		},
	};
}
angular.module('mapSVG').directive('drawingDirective', [ drawingDirective]);
