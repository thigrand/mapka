'use strict';

function MapController(ZoomProvince, DrawCities, $q, XmlHandler, $scope) {
    $scope.list = [];
    XmlHandler.getData().then(function(data) {
        data.miasta.forEach(function(element) {
            if (element.doradca.length !== undefined) {
                $scope.list.push(element);
            }
        });
        XmlHandler.list = $scope.list;

    });
    this.afterClicked = function(clickEvent) {
        $scope.clickEvent = ZoomProvince.afterClicked(clickEvent.target.parentNode);
    };

    // this.clickedCity = function(clickEventb) {
    //  $scope.clickEventb = ChosenCity.clicked(clickEventb.target);
    // };

}
angular.module('mapSVG').controller('MapController', ['ZoomProvince', 'DrawCities', '$q', 'XmlHandler', '$scope', MapController]);