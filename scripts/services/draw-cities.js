'use strict';
function DrawCities($q, MapXmlHandler) {

    // function draw(xmlHandlers) {//replaced by directive
    //     xmlHandlers.list.forEach(function makeCircle(element, index) {
    //         var svg = document.getElementById('dots');
    //         var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
    //         newElement.setAttribute("r", "1"); //Set path's data
    //         newElement.setAttribute("cx", element.x); //Set path's data
    //         newElement.setAttribute("cy", element.y); //Set path's data

    //         newElement.setAttribute("ng-click", "svg.chosenCity($event);");
    //         newElement.setAttribute("id", element.nazwa);
    //         newElement.setAttribute("name", element.wojewodztwo);
    //         newElement.setAttribute('class', "dots");
    //         newElement.setAttribute('city-form', "");

    //         svg.appendChild(newElement);
    //     });
    // }
 
    //draw zoomed dots on zoomed province
    function drawZoomed(obj) { 
    	var provinceName = obj.getElementsByTagName("use")[0].attributes[1].nodeValue;
    	var svg = document.getElementById('dots');
		var circles = svg.getElementsByTagName("circle") ;

		for(var i = 0; i < circles.length; i++) {
			if("#province-" + circles[i].attributes[7].nodeValue === provinceName) { 
			    //var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
	            var matrixX = circles[i].attributes[1].nodeValue;
	            var matrixY = circles[i].attributes[2].nodeValue;
	            var zoomedPosX = (200 - matrixX * 2.3) / 2.3,
		    		zoomedPosY = (200 - matrixY * 2.3) / 2.3;
	            circles[i].setAttribute('class', "dots zoomed");
			}
			else {
			    circles[i].setAttribute('class', "dots hiddenDots");
			}
		}
    }
    // this.draw = draw;
    this.drawZoomed = drawZoomed;
    return this;
};
angular.module('mapSVG').factory('DrawCities', ['$q', 'MapXmlHandler', DrawCities]);