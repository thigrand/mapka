'use strict';
/**
 * @ngdoc function
 * @name mapAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapAppApp
 */
 (function(){
angular.module('mapAppApp', ['ui.bootstrap']);

function TagController($scope) { 
	$scope.$watchCollection('data.tags',function(val){
		//console.log(val);
	});
}
angular.module('mapAppApp').controller('TagController', TagController);

function xmlHandler(){
	var  xmlHandler= {};
	var xmlfile = 'data/Mapa.xml';
	xmlHandler.selected = undefined;
  	xmlHandler.miasta = [];

  	dataInJson.loadXML(xmlfile, function(data) {

  		var list = []
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
			
            //methods

            //ponowne szukanie po dodaniu czegokolwiek do inputa
            scope.search = function() {
            	//console.log(xmlHandler.miasta);
            	var list = xmlHandler.list;
            	//scope.suggestions = list;
				
				function makeStringNeutral(string) {
					var neutralString = ""//string.toLowerCase();
					var charList = {'Ą':'A', 'ą':'a', 'Ć':'C', 'ć':'c', 'Ę':'E', 'ę':'e',
		                'Ł':'L', 'ł':'l', 'Ó':'O', 'ó':'o', 'Ś':'S', 'ś':'s',
		                'Ź':'Z', 'ź':'z', 'Ż':'Z', 'ź':'z'};

		            neutralString = string.replace(/./g, function(c) {return c in charList ? charList[c] : c}).toLowerCase();

					return neutralString;
				}

				function searchCity(element, index) {
					// var element = makeStringNeutral(element);
					// var searchText = makeStringNeutral(scope.searchText);

					if(makeStringNeutral(element).indexOf(makeStringNeutral(scope.searchText)) !== -1) {
						scope.suggestions.push(element);
					}
					scope.selectedIndex=-1;

				}
            	list.forEach(searchCity);
            	//console.log(makeStringNeutral("MaŁy teścik ZIŹĄ"));



			     // $http.get(attrs.url+'?term='+scope.searchText).success(function(data){
			         // if(list.indexOf(scope.searchText)===-1){
			         //     list.unshift(scope.searchText);
			         // }
			         // scope.suggestions=list;
			         // scope.selectedIndex=-1;
			     // });
			 }

            scope.checkKeyDown = function(event) {
            	//wybór strzałkami
                // if (event.keyCode === 40) {
                //     event.preventDefault();
                //     if (scope.selectedIndex + 1 !== scope.suggestions.length) {
                //         scope.selectedIndex++;
                //     }
                // } else if (event.keyCode === 38) {
                //     event.preventDefault();
                //     if (scope.selectedIndex - 1 !== -1) {
                //         scope.selectedIndex--;
                //     }
                // } else 
                //zatwierdzenie enterem
                if (event.keyCode === 13) {
                   // scope.addToSelectedTags(scope.selectedIndex);// przekazanie do formularza ma byc
                }
            };
            scope.$watch('selectedIndex', function(val) {
                if (val !== -1) {
                    scope.searchText = scope.suggestions[scope.selectedIndex];
                }
            });
            // //Dodanie tagów, do przerobienia na dodanie danych do formularza
            // scope.addToSelectedTags = function(index) {
            //     if (scope.selectedTags.indexOf(scope.suggestions[index]) === -1) {
            //         scope.selectedTags.push(scope.suggestions[index]);
            //         scope.searchText = '';
            //         scope.suggestions = [];
            //     }
            // };


        }
    };
}]);
})();
