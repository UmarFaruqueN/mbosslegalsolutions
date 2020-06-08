        /*
        =========================================================================================
        13. GOOGLE MAP
        =========================================================================================
        */

        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                scrollwheel: false,
                zoom: 16,
                center: new google.maps.LatLng(23.710551, 90.415643), // New York
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }] /**/
                }, {
                    featureType: "administrative.locality",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.neighborhood",
                    stylers: [{
                        visibility: "on"
                    }] /**/
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    }]
                }]
            };
            var contentString = '<div id="mapcontent">' + '<p>Yup, we are here!</p></div>';
            var infowindow = new google.maps.InfoWindow({
                maxWidth: 320,
                content: contentString
            });
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var image = new google.maps.MarkerImage('images/pin.png', null, null, null, new google.maps.Size(50, 71))
            var myLatLng = new google.maps.LatLng(23.710551, 90.415643);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: 'Trust'
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }