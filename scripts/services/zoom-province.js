'use strict';
    var isZoomed = 0;
function ZoomProvince(MapXmlHandler, DrawCities) {

    function setAClass(obj, nameOfClass) {
        var d = document.getElementById(obj.id);
        d.setAttribute('class', nameOfClass);
    }
    //Zooming province.
    function afterClicked(obj) {
        var d = document.getElementById(obj.parentNode.id),
            zoomedElement = document.getElementById('zoomed'),
            zoomedDots = document.getElementById('zoomedDots');
        var circles = document.getElementById('dots').getElementsByTagName('circle');
        
        if (isZoomed === 0) {
        	var matrixX = d.transform.baseVal[0].matrix.e,          
        		matrixY = d.transform.baseVal[0].matrix.f,
        		/*movement_(x,y) =( new_(x,y) - old_(x,y) * scale) / scale*/
	        	zoomedPosX = (200 - matrixX * 2.3) / 2.3, 
	            zoomedPosY = (200 - matrixY * 2.3) / 2.3;
	        zoomedElement.transform.baseVal[0].matrix.e = zoomedPosX; 
	        zoomedElement.transform.baseVal[0].matrix.f = zoomedPosY - 7;
			zoomedDots.transform.baseVal[0].matrix.e = zoomedPosX; 
			zoomedDots.transform.baseVal[0].matrix.f = zoomedPosY - 7;
			DrawCities.drawZoomed(d);
            zoomedElement.setAttribute('xlink:href', '#' + d.id);
            zoomedDots.setAttribute('xlink:href', '#'+'dots');
            isZoomed++;
        } 
        else {
            zoomedElement.setAttribute('xlink:href', '');
            zoomedDots.setAttribute('xlink:href', '');
            isZoomed = 0;
            for(var g = 0; g < circles.length;g++) {
				circles[g].setAttribute('class', 'dots');
            }
        }

    }
    this.afterClicked = afterClicked;
    return this;
}
angular.module('mapSVG').factory('ZoomProvince', ['MapXmlHandler', 'DrawCities', ZoomProvince]);

