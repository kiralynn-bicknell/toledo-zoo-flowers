ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9304838.188239, 5103712.709763, -9303527.160540, 5104394.968140]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Base Map ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ExoticNonNativeFlowers_1 = new ol.format.GeoJSON();
var features_ExoticNonNativeFlowers_1 = format_ExoticNonNativeFlowers_1.readFeatures(json_ExoticNonNativeFlowers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExoticNonNativeFlowers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExoticNonNativeFlowers_1.addFeatures(features_ExoticNonNativeFlowers_1);
cluster_ExoticNonNativeFlowers_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ExoticNonNativeFlowers_1
});
var lyr_ExoticNonNativeFlowers_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ExoticNonNativeFlowers_1, 
                style: style_ExoticNonNativeFlowers_1,
                popuplayertitle: ' ',
                interactive: true,
                title: '<img src="styles/legend/ExoticNonNativeFlowers_1.png" /> Exotic/Non-Native Flowers'
            });
var format_NativeFlowers_2 = new ol.format.GeoJSON();
var features_NativeFlowers_2 = format_NativeFlowers_2.readFeatures(json_NativeFlowers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeFlowers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeFlowers_2.addFeatures(features_NativeFlowers_2);
cluster_NativeFlowers_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_NativeFlowers_2
});
var lyr_NativeFlowers_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_NativeFlowers_2, 
                style: style_NativeFlowers_2,
                popuplayertitle: 'Native Flowers',
                interactive: true,
                title: '<img src="styles/legend/NativeFlowers_2.png" /> Native Flowers'
            });

lyr_BaseMap_0.setVisible(true);lyr_ExoticNonNativeFlowers_1.setVisible(true);lyr_NativeFlowers_2.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_ExoticNonNativeFlowers_1,lyr_NativeFlowers_2];
lyr_ExoticNonNativeFlowers_1.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Common Name': 'Common Name', 'Photo': 'Photo', 'Native to Ohio': 'Native to Ohio', 'Flower Origin': 'Flower Origin', });
lyr_NativeFlowers_2.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'Common Name': 'Common Name', 'Photo': 'Photo', 'Native to Ohio': 'Native to Ohio', 'Flower Origin': 'Flower Origin', });
lyr_ExoticNonNativeFlowers_1.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Common Name': 'TextEdit', 'Photo': 'ExternalResource', 'Native to Ohio': 'Range', 'Flower Origin': 'TextEdit', });
lyr_NativeFlowers_2.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'Common Name': 'TextEdit', 'Photo': 'ExternalResource', 'Native to Ohio': 'Range', 'Flower Origin': 'TextEdit', });
lyr_ExoticNonNativeFlowers_1.set('fieldLabels', {'Date': 'hidden field', 'Common Name': 'inline label - always visible', 'Photo': 'inline label - always visible', 'Native to Ohio': 'hidden field', 'Flower Origin': 'inline label - always visible', });
lyr_NativeFlowers_2.set('fieldLabels', {'Date': 'hidden field', 'Common Name': 'inline label - always visible', 'Photo': 'inline label - always visible', 'Native to Ohio': 'hidden field', 'Flower Origin': 'inline label - always visible', });
lyr_NativeFlowers_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
