/*Encontrar la posisción del usuario*/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
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
		"foto": "img/taco.jpg",
		"direccion":"Av. Álvaro Obregón 230, Roma Nte., 06700 Ciudad de México, CDMX",
		"categoria": "Tacos",
		"latitud": "19.4168952",
		"longitud": "-99.1679034"
	},
	{
		"nombre": "Carls Jr",
		"foto": "img/carls.jpeg",
		"direccion": "Génova 70-B, Juárez, 06600 Cuauhtemoc, CDMX",
		"categoria": "Hamburguesas",
		"latitud": "19.4217644",
		"longitud": "-99.1784958"
	},
	{
		"nombre": "Papa guapa",
		"foto": "img/papa.png",
		"direccion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX",
		"categoria": "Papas",
		"latitud": "19.4238476",
		"longitud": "-99.1631193"
	},
	{
		"nombre": "Mercado Roma",
		"foto": "img/mercado.jpg",
		"direccion": "Calle Querétaro 225, Roma Nte., 06700 Ciudad de México, CDMX",
		"categoria": "Varios",
		"latitud": "19.4238476",
		"longitud": "-99.1631193"
	}
];
console.log(lugares);
var plantillaLugar = '<article>' +
			'<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
	        	'<div class="row valign-wrapper">' +
	            	'<div class="col s3">' +
	                	'<img src="--foto--" alt="Contact" class="circle responsive-img">' +
	              	'</div>' +
	              	'<div class="col s9">' +
	              		'<h5 class="name">--nombre--</h5>' +
	              		'<p>--categoría--</p>' +
	                	'<span class="black-text">' +
	                 	'Dirección: --direccion--' +
	                '</span>' +
	              '</div>' +
	      		'</div>' +
          	'</div>' +
		'</article>';

var cargarPagina = function () {
	$("#search-form").submit(filtrarLugares);
};

var filtrarLugares = function(e){
	e.preventDefault();
	var criterio = $("#search").val().toLowerCase();
	var resultados = lugares.filter(function(lugar){
		return lugar.nombre.toLowerCase().indexOf(criterio) >= 0;
	});
	mostrarLugares(resultados);
	console.log(resultados);
};

var mostrarLugares = function (lugares){
	var plantillaFinal = "";
	lugares.forEach(function(lugar){
		plantillaFinal += plantillaLugar.replace("--nombre--", lugar.nombre).replace("--categoría--", lugar.categoria).replace("--foto--", lugar.foto).replace("--direccion--", lugar.direccion);
	});
	$(".lugares").html(plantillaFinal);
};
$( document ).ready(cargarPagina);
	$(".button-collapse").sideNav();