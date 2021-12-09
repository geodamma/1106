ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179883.362034, 2702519.517064, 181729.332031, 2703773.250132]);
var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google 衛星影像',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format_utf8_2 = new ol.format.GeoJSON();
var features_utf8_2 = format_utf8_2.readFeatures(json_utf8_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_utf8_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_utf8_2.addFeatures(features_utf8_2);
var lyr_utf8_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_utf8_2, 
                style: style_utf8_2,
                interactive: true,
                title: '<img src="styles/legend/utf8_2.png" /> 后浦磚造建築utf8'
            });

lyr_Google_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_utf8_2.setVisible(true);
var layersList = [lyr_Google_0,lyr_1975_1,lyr_utf8_2];
lyr_utf8_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_utf8_2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_utf8_2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_utf8_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});