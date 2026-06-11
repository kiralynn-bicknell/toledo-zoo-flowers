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
var format_ToledoZooFlowerAnnex_1 = new ol.format.GeoJSON();
var features_ToledoZooFlowerAnnex_1 = format_ToledoZooFlowerAnnex_1.readFeatures(json_ToledoZooFlowerAnnex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToledoZooFlowerAnnex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToledoZooFlowerAnnex_1.addFeatures(features_ToledoZooFlowerAnnex_1);
cluster_ToledoZooFlowerAnnex_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ToledoZooFlowerAnnex_1
});
var lyr_ToledoZooFlowerAnnex_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ToledoZooFlowerAnnex_1, 
                style: style_ToledoZooFlowerAnnex_1,
                popuplayertitle: 'Toledo Zoo Flower Annex',
                interactive: true,
    title: 'Toledo Zoo Flower Annex<br />\
    <img src="styles/legend/ToledoZooFlowerAnnex_1_0.png" /> Native to Ohio<br />\
    <img src="styles/legend/ToledoZooFlowerAnnex_1_1.png" /> Exotic/Non-Native<br />' });

lyr_BaseMap_0.setVisible(true);lyr_ToledoZooFlowerAnnex_1.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_ToledoZooFlowerAnnex_1];
lyr_ToledoZooFlowerAnnex_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Common Name': 'Common Name', 'Photo': 'Photo', 'Native to Ohio': 'Native to Ohio', 'Flower Origin': 'Flower Origin', });
lyr_ToledoZooFlowerAnnex_1.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Common Name': 'TextEdit', 'Photo': 'ExternalResource', 'Native to Ohio': 'Range', 'Flower Origin': '', });
lyr_ToledoZooFlowerAnnex_1.set('fieldLabels', {'Date': 'hidden field', 'Common Name': 'header label - visible with data', 'Photo': 'header label - visible with data', 'Native to Ohio': 'hidden field', 'Flower Origin': 'header label - visible with data', });
lyr_ToledoZooFlowerAnnex_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});