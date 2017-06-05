$( document ).ready(function(){
	$(".button-collapse").sideNav();
})


/*function initMap() {
    var laboratoria = {lat:19.417639, lng:-99.164815};
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 15,
	    center: laboratoria
    });
    var marker = new google.maps.Marker({
        position: laboratoria,
          map: map
    });
};
*/

/*Encontrar la posisción del usuario*/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('¡Te encontramos!');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
};

/*Lugares*/
var lugares = [
	{
		"nombre": "Punto taco Mx",
		"latitud": "19.4168952",
		"longitud": "-99.1679034"
	},
	{
		"nombre": "Carls Jr",
		"latitud": "19.4217644",
		"longitud": "-99.1784958"
	},
	{
		"nombre": "Papa guapa",
		"latitud": "19.4238476",
		"longitud": "-99.1631193"
	},
];