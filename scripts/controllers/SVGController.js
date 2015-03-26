'use strict';
function SVGController(ZoomProvince, DrawCities, $q, xmlHandlers, ChosenCity, $scope) {
	xmlHandlers.getData().then(function(data) {
		$scope.list = data.list;
	});	
   
    this.afterClicked = function(clickEvent) {
        $scope.clickEvent = ZoomProvince.afterClicked(clickEvent.target.parentNode);
    };

    this.clickedCity = function(clickEventb) {
    	$scope.clickEventb = ChosenCity.clicked(clickEventb.target);
    };
}
angular.module('mapSVG').controller('SVGController', ['ZoomProvince', 'DrawCities', '$q', 'xmlHandlers', 'ChosenCity', '$scope', SVGController]);

