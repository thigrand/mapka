'use strict';
function MapXmlHandler($q, dataInJson) {
    var xmlfile = 'data/mapa.xml';//XMLFILE.URL;
    //console.log(XMLFILE);
    function getData() {
        var xmlHandlers = {};
        var deffered = $q.defer();
        dataInJson.loadXML(xmlfile, function(data) {
            xmlHandlers.miasta = data.miasta.miasto;
            deffered.resolve(xmlHandlers);
        });
        return deffered.promise;
    }
    return {
        getData: getData,
    };
}
angular.module('mapSVG').factory('MapXmlHandler', ['$q', 'dataInJson',  MapXmlHandler]);