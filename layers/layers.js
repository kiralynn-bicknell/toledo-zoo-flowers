ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9304838.188239, 5103712.709763, -9303527.160540, 5104394.968140]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ToledoZooFlowerSurvey_1 = new ol.format.GeoJSON();
var features_ToledoZooFlowerSurvey_1 = format_ToledoZooFlowerSurvey_1.readFeatures(json_ToledoZooFlowerSurvey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToledoZooFlowerSurvey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToledoZooFlowerSurvey_1.addFeatures(features_ToledoZooFlowerSurvey_1);
cluster_ToledoZooFlowerSurvey_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ToledoZooFlowerSurvey_1
});
var lyr_ToledoZooFlowerSurvey_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ToledoZooFlowerSurvey_1, 
                style: style_ToledoZooFlowerSurvey_1,
                popuplayertitle: 'Toledo Zoo Flower Survey 2026',
                interactive: true,
    title: 'Toledo Zoo Flower Survey 2026<br />\
    <img src="styles/legend/ToledoZooFlowerSurvey_1_0.png" /> Native to Ohio<br />\
    <img src="styles/legend/ToledoZooFlowerSurvey_1_1.png" /> Exotic/Non-Native<br />' });

lyr_BaseMap_0.setVisible(true);lyr_ToledoZooFlowerSurvey_1.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_ToledoZooFlowerSurvey_1];
lyr_ToledoZooFlowerSurvey_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Common Name': 'Common Name', 'Photo': 'Photo', 'Native to Ohio': 'Native to Ohio', 'Flower Origin': 'Flower Origin', });
lyr_ToledoZooFlowerSurvey_1.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Common Name': 'TextEdit', 'Photo': 'ExternalResource', 'Native to Ohio': 'Range', 'Flower Origin': '', });
lyr_ToledoZooFlowerSurvey_1.set('fieldLabels', {'Date': 'hidden field', 'Common Name': 'inline label - always visible', 'Photo': 'inline label - always visible', 'Native to Ohio': 'hidden field', 'Flower Origin': 'inline label - always visible', });
lyr_ToledoZooFlowerSurvey_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});