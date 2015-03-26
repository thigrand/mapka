'use strict';
function drawingDirective() {//Generate circles elements representing cities.
	return {
		templateNamespace:'svg',
		template:'<circle ng-repeat="element in list" r="1" ng-attr-cx="{{element.x}}" ng-attr-cy="{{element.y}}" ' +
		'ng-click="svg.clickedCity($event);" class="dots" ng-attr-name="{{element.wojewodztwo}}" city-form></circle>',
			link: function(scope, element, attrs) {
		},
	};
}
angular.module('mapSVG').directive('drawingDirective', [ drawingDirective]);
