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

function xmlHandler($http, $scope){
	var xmlfile = 'data/Mapa.xml';
	$scope.selected = undefined;
  $scope.miasta = [];

  dataInJson.loadXML(xmlfile, function(data) {
    $scope.miasta = data.miasta.miasto;
  });
}




angular.module('mapAppApp').controller('TagController', TagController);


angular.module('mapAppApp')
	.directive('autoComplete', ['$http', function($http) {
    return {
        restrict: 'AE',
        scope: {
            selectedTags: '=model'
        },
        templateUrl: '/views/autocomplete-template.html',
        link: function(scope, elem, attrs) {
        	//init
            scope.suggestions = [];
            scope.selectedTags = [];
            scope.selectedIndex = -1;
            //methods
            scope.removeTag = function(index) {
                scope.selectedTags.splice(index, 1);
            };
            //ponowne szukanie po dodaniu czegokolwiek do inputa
            scope.search = function() {
                $http.get(attrs.url + '?term=' + scope.searchText).success(function(data) {
                    if (data.indexOf(scope.searchText) === -1) {
                        data.unshift(scope.searchText);
                    }
                    scope.suggestions = data;
                    scope.selectedIndex = -1;
                });
            };
            //Dodanie tagów, do przerobienia na dodanie danych do formularza
            scope.addToSelectedTags = function(index) {
                if (scope.selectedTags.indexOf(scope.suggestions[index]) === -1) {
                    scope.selectedTags.push(scope.suggestions[index]);
                    scope.searchText = '';
                    scope.suggestions = [];
                }
            };

            scope.checkKeyDown = function(event) {
                if (event.keyCode === 40) {
                    event.preventDefault();
                    if (scope.selectedIndex + 1 !== scope.suggestions.length) {
                        scope.selectedIndex++;
                    }
                } else if (event.keyCode === 38) {
                    event.preventDefault();
                    if (scope.selectedIndex - 1 !== -1) {
                        scope.selectedIndex--;
                    }
                } else if (event.keyCode === 13) {
                    scope.addToSelectedTags(scope.selectedIndex);
                }
            };
            scope.$watch('selectedIndex', function(val) {
                if (val !== -1) {
                    scope.searchText = scope.suggestions[scope.selectedIndex];
                }
            });
        }
    };
}]);


})();
