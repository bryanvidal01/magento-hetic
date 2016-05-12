function initMap() {

    var myLatLng = {lat: -25.363, lng: 131.044};
    var myLatLng2 = {lat: -30.363, lng: 131.044};
  // Specify features and elements to define styles.
  var styleArray = 
      [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
  ;


  // Create a map object and specify the DOM element for display.

  var iconBase = {
    url: "http://jeromevanetty.com/pointer.svg", // url
    scaledSize: new google.maps.Size(50, 63), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};


  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.856614, lng: 2.3522219000000177},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 8
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 48.856614, lng: 2.3522219000000177},
    icon: iconBase,
  });
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 48.956614, lng: 2.252221900000017},
    icon: iconBase,
  });
  var marker = new google.maps.Marker({
    map: map,
    icon: iconBase,
    position: {lat: 48.556614, lng: 2.552221900000017},
  });
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 48.256614, lng: 2.222221900000017},
    icon: iconBase,
  });
}

initMap();
