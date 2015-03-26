'use strict';
function MapController(ZoomProvince, DrawCities, $q, MapXmlHandler, $scope) {
	MapXmlHandler.getData().then(function(data) {
		$scope.list = [];
            data.miasta.forEach(function(element) {
                if (element.doradca.length !== undefined) {
                    $scope.list.push(element);
                }
            });
         MapXmlHandler.list = $scope.list;
	});	
   
    this.afterClicked = function(clickEvent) {
        $scope.clickEvent = ZoomProvince.afterClicked(clickEvent.target.parentNode);
    };

    // this.clickedCity = function(clickEventb) {
    // 	$scope.clickEventb = ChosenCity.clicked(clickEventb.target);
    // };
}
angular.module('mapSVG').controller('MapController', ['ZoomProvince', 'DrawCities', '$q', 'MapXmlHandler', '$scope', MapController]);

