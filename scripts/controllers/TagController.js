'use strict';
function TagController($scope) { 
	$scope.$watchCollection('data.tags',function(val){

	});
}
angular.module('mapAppApp').controller('TagController', TagController);