'use strict';
function XmlHandler($q, dataInJson) {
    var xmlfile = 'data/mapa.xml';//XMLFILE.URL;
    //console.log(XMLFILE);
    var cities = {};
    cities.selected = undefined;
    function getData() {
        var deffered = $q.defer();
        dataInJson.loadXML(xmlfile, function(data) {
            cities.miasta = data.miasta.miasto;
            var namesOfCities = [];
            for(var number in data.miasta.miasto) {
                namesOfCities.push(data.miasta.miasto[number].nazwa);
            }
            cities.namesOfCities = namesOfCities;
            deffered.resolve(cities);
        });
        return deffered.promise;
    }
    return {
        getData: getData,
        cities: cities,
    };
}
angular.module('mapSVG').factory('XmlHandler', ['$q', 'dataInJson',  XmlHandler]);