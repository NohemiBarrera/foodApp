function cargarPagina () {
	obtenerUbicacionActual();
	$("#search-form").submit(filtrarLugares);
	$(".name").click(cambiarUbicacion);
};
/*Encontrar la posición del usuario*/
function obtenerUbicacionActual() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicionActual);
  } else {
    alert("Geolocalización no es soportado en tu navegador");
  }
};

function mostrarMapa(coordenadas) {
  var map = new google.maps.Map($('.map')[0], {
    zoom: 15,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
};
function mostrarPosicionActual(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

  mostrarMapa(coordenadas);
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
		"latitud": "19.4253393",
		"longitud": "-99.1655243"
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
		"latitud": "19.414062",
		"longitud": "-99.1664147"
	}
];
var plantillaLugar = '<article>' +
			'<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
	        	'<div class="row valign-wrapper">' +
	            	'<div class="col s3">' +
	                	'<img src="--foto--" alt="Contact" class="circle responsive-img">' +
	              	'</div>' +
	              	'<div class="col s9">' +
	              		'<h5 class="name" data-latitud="--latitud--" data-longitud="--longitud--">--nombre--</h5>' +
	              		'<p>--categoría--</p>' +
	                	'<span class="black-text">' +
	                 	'Dirección: --direccion--' +
	                '</span>' +
	              '</div>' +
	      		'</div>' +
          	'</div>' +
		'</article>';

var mostrarLugares = function (lugares){
	var plantillaFinal = "";
	lugares.forEach(function(lugar){
		plantillaFinal += plantillaLugar.replace("--nombre--", lugar.nombre).replace("--latitud--", lugar.latitud).replace("--longitud--", lugar.longitud).replace("--categoría--", lugar.categoria).replace("--foto--", lugar.foto).replace("--direccion--", lugar.direccion);
	});
	$(".lugares").html(plantillaFinal);
};
var filtrarLugares = function(e){
	e.preventDefault();
	var criterio = $("#search").val().toLowerCase();
	var resultados = lugares.filter(function(lugar){
		return lugar.nombre.toLowerCase().indexOf(criterio) >= 0;
	});
	mostrarLugares(resultados);
};

function cambiarUbicacion (){
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

  mostrarMapa(coordenadas);
};

$( document ).ready(cargarPagina);
	$(".button-collapse").sideNav();