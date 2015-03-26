'use strict';
function xmlHandler(){
	var xmlHandler = {};
	var xmlfile = 'data/Mapa.xml';
	xmlHandler.selected = undefined;
  	xmlHandler.miasta = [];
  	dataInJson.loadXML(xmlfile, function(data) {
  		var list = [];
  		for(var number in data.miasta.miasto) {
			list.push(data.miasta.miasto[number].nazwa);
  		}
    	xmlHandler.miasta = data.miasta.miasto;
    	xmlHandler.list = list;
  	});
  	return xmlHandler;
}
angular.module('mapAppApp').factory('xmlHandler',  xmlHandler);