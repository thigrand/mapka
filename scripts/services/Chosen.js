'use strict';
function ChosenCity() {
    function clicked(city) {
        //console.log(city);
    }
    this.clicked = clicked;
    return this;
}
angular.module('mapSVG').factory('ChosenCity',  ChosenCity);