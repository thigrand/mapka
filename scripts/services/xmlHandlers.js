'use strict';
function xmlHandlers($q) {
    var xmlfile = 'data/Mapa.xml';

    function getData() {
        var xmlHandlers = {};
        var deffered = $q.defer();
        dataInJson.loadXML(xmlfile, function(data) {
            xmlHandlers.miasta = data.miasta.miasto;
            var list = [];
            xmlHandlers.miasta.forEach(function(element) {
                if (element.doradca.length !== undefined) {
                    list.push(element);
                }
            });
            xmlHandlers.list = list;
            deffered.resolve(xmlHandlers);
        });
        return deffered.promise;
    }
    return {
        getData: getData,
    };
}
angular.module('mapSVG').factory('xmlHandlers', ['$q', xmlHandlers]);