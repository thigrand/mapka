'use strict';

var isZoomed = 0;
var defaultView = null;
var becomeBigClass = null;

// var xmlCity = function xmlHandler(){
// 	var xmlHandler= {};
// 	var xmlfile = 'data/Mapa.xml';
// 	xmlHandler.selected = undefined;
//   	xmlHandler.miasta = [];
//   	dataInJson.loadXML(xmlfile, function(data) {
//   		var list = [];
//   		for(var number in data.miasta.miasto) {
// 			list.push(data.miasta.miasto[number].nazwa);
//   		}
//     	xmlHandler.miasta = data.miasta.miasto;
//     	xmlHandler.list = list;
//   	});
//   	return xmlHandler;

// }

function provinceClick(obj) {
	defaultView = obj;
	if(isZoomed === 0) {
		//console.log(obj.id);
		console.log(obj);// === console.log(document.getElementById(obj.id));
		



		obj = becomeBigClass;
		isZoomed++;

  	}
	else {

	  	obj = defaultView;
	  	isZoomed = 0;

	}

}
