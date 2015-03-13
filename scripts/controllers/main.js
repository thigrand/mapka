'use strict';
/**
 * @ngdoc function
 * @name mapAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapAppApp
 */
 (function(){
angular.module('mapAppApp', []);

function TagController($scope) { 
	$scope.$watchCollection('data.tags',function(val){
		//console.log(val);
	});
}
angular.module('mapAppApp').controller('TagController', TagController);

function xmlHandler(){
	var xmlHandler= {};
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

angular.module('mapAppApp')
	.directive('autoComplete', ['$http', 'xmlHandler', function($http, xmlHandler) {
    return {
        restrict: 'AE',
        scope: {
            selectedTags: '=model'
        },
        templateUrl: 'views/autocomplete-template.html',
        link: function(scope, elem, attrs) {
        	//init

            scope.suggestions = [];
            scope.selectedTags = [];
            scope.selectedIndex = -1;
            scope.cityIndex = [];
            scope.salesmans = [];
            scope.saleInd = undefined;
			
            //methods

            //ponowne szukanie po dodaniu czegokolwiek do inputa
            scope.search = function() {
            	
            	var list = xmlHandler.list;
            	scope.suggestions = [];
            	scope.cityIndex = [];				
				function makeStringNeutral(string) {
					var neutralString = '';//string.toLowerCase();
					var charList = {'Ą':'A', 'ą':'a', 'Ć':'C', 'ć':'c', 'Ę':'E', 'ę':'e',
		                'Ł':'L', 'ł':'l', 'Ó':'O', 'ó':'o', 'Ś':'S', 'ś':'s', 'Ń':'N', 'ń':'n',
		                'Ż':'Z', 'ż':'z', 'Ź':'Z', 'ź':'z'};

		            neutralString = string.replace(/./g, function(c) {return c in charList ? charList[c] : c;}).toLowerCase();

					return neutralString;
				}

				function searchCity(element, index) {
					var elementneutral = makeStringNeutral(element);
					if(elementneutral.indexOf(makeStringNeutral(scope.searchText)) !== -1) {
						scope.suggestions.push(element);
						scope.cityIndex.push(index);
					}
					scope.selectedIndex=-1;
				}
            	list.forEach(searchCity);

			 };

            scope.checkKeyDown = function(event) {

                if (event.keyCode === 13) {
                   scope.addToSelectedTags(scope.selectedIndex);
                }
            }; scope.selectedTags = [];
            scope.$watch('selectedIndex', function(val) {
                if (val !== -1) {
                    scope.searchText = scope.suggestions[scope.selectedIndex];
                }
            });
            //Dodanie tagów, do przerobienia na dodanie danych do formularza
            scope.addToSelectedTags = function(index) {
                if (scope.selectedTags.indexOf(scope.suggestions[index]) === -1) {
                	scope.selectedTags.shift();
                    scope.selectedTags.push(scope.suggestions[index]);
                    scope.searchText = '';
                    scope.suggestions = [];
                    var whichCity = scope.cityIndex[index];
                    scope.addSalesman(whichCity);
                }
            };
            scope.addSalesman = function(index) {
            	scope.salesmans = [];
            	if (xmlHandler.miasta[index].doradca.length !== 0) {
            	    for(var i = 0; i < xmlHandler.miasta[index].doradca.length; i++) {
            			scope.salesmans.push(xmlHandler.miasta[index].doradca[i]);
            		}
            	}
            	scope.saleInd = undefined;
            }
           	scope.chooseSalesman = function (index) {
           		scope.saleInd = index;
           	}


        }
    };
}]);

angular.module('mapAppApp')
	.directive('mapStates', ['xmlHandler', function(xmlHandler) {
	return {

	};
}]);		

})();

