'use strict';
function cityForm () {
  	return {
	    restrict: 'A',
	    link: function (scope, element) {
	    	scope.salesmans = [];
	        scope.addSalesman = function() {//add salesmans from clicked city for form.
	      		if(scope.element) {
		      		for(var i = 0; i < scope.element.doradca.length; i++) {
		      			scope.salesmans.push(scope.element.doradca[i]);
		      		}
		      	}
		      	else {
		      		console.log(scope);
		      	}
	      	};
	        element.on('click', function () {
	        	scope.addSalesman();
	        	console.log(scope.salesmans);

	      	});
	    }
  	};
}
angular.module('mapSVG').directive('cityForm', cityForm);
