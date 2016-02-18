(function(){
	var app = angular.module('myApp', []);

	app.controller('formularioCtrl', function($scope) {
	    $scope.formData = {};
	 	$scope.submitForm = function (formData) {
		    console.log('Form submitted with' + JSON.stringify(formData));
		  };
	});

	app.controller('formularioFooter', function($scope) {
	    $scope.formData = {};
	 	$scope.submitForm = function (formData) {
		    console.log('estos datos' + JSON.stringify(formData));
		  };
	});

	app.controller('todosCursos',function($scope){
		$scope.administrativos =[
			{
				name: 'Analista en Recursos Humanos',
				images: "img/analista-rrhh.jpg",
				link: "analista-rrhh.html"
			},
			{
				name: 'Asistente de Marketing',
				images: "img/asist-mkt.jpg",
				link: "asist-mkt.html"
			},
			{
				name: 'Gestión de ventas',
				images: "img/gest-ventas.jpg",
				link: "gest-ventas.html"
			},
			{
				name: 'Contabilidad',
				images: "img/contabilidad.jpg",
				link: "contabilidad.html"
			},
			{
				name: 'Secretariado Ejecutivo',
				images: "img/sec-ejecutivo.jpg",
				link: "sec-ejecutivo.html"
			},
			{
				name: 'Asistente Contable',
				images: "img/asist-contable.jpg",
				link: "asist-contable.html"
			},
			{
				name: 'Administración de Empresas',
				images: "img/adm-empresas.jpg",
				link: "adm-empresas.html"
			},
			{
				name: 'Asistente Financiero',
				images: "img/asist-financiero.jpg",
				link: "asist-financiero.html"
			},
			{
				name: 'Analista en Gestión Rural',
				images: "img/gest-rural.jpg",
				link: "gest-rural.html"
			},
			{
				name: 'Asistente en Comercio Exterior',
				images: "img/asist-com-exterior.jpg",
				link: "asist-com-exterior.html"
			},
			{
				name: 'Atención al Cliente',
				images: "img/at-cliente.jpg",
				link: "at-cliente.html"
			},
			{
				name: 'Gestión Contable y Auditoría Empresarial',
				images: "img/gestion-cont-empre.jpg",
				link: "gestion-cont-empre.html"
			}
		];
		$scope.oficios=[
			{
				name: 'Fotografía',
				images: "img/fotografia.jpg",
				link: "fotografia.html"
			},
			{
				name: 'Refrigeración',
				images: "img/refrigeracion.jpg",
				link: "refrigeracion.html"
			},
			{
				name: 'Peluquería',
				images: "img/peluqueria.jpg",
				link: "peluqueria.html"
			},
			{
				name: 'Repostería',
				images: "img/reposteria.jpg",
				link: "reposteria.html"
			},
			{
				name: 'Técnico Electricista',
				images: "img/electricista.jpg",
				link: "electricista.html"
			},
			{
				name: 'Maquillaje',
				images: "img/maquillaje.jpg",
				link: "maquillaje.html"
			},
			{
				name: 'Cocina',
				images: "img/cocina.jpg",
				link: "cocina.html"
			},
			{
				name: 'Jardinería',
				images: "img/jardineria.jpg",
				link: "jardineria.html"
			},
			{
				name: 'Apicultura',
				images: "img/apicultura.jpg",
				link: "apicultura.html"
			},
			{
				name: 'Mecánica de vehículos',
				images: "img/mec-auto.jpg",
				link: "mec-auto.html"
			},
			{
				name: 'Educación especial',
				images: "img/ed-especial.jpg",
				link: "ed-especial.html"
			},
			{
				name: 'Conservas',
				images: "img/conservas.jpg",
				link: "conservas.html"
			},
			{
				name: 'Recreación y Tiempo libre',
				images: "img/recreacion-tiempolibre.jpg",
				link: "recreacion-tiempolibre.html"
			},
			{
				name: 'Reparación en Joyería',
				images: "img/rep-joyeria.jpg",
				link: "rep-joyeria.html"
			},
			{
				name: 'Especialista en Aluminio',
				images: "img/aluminio.jpg",
				link: "aluminio.html"
			},
			{
				name: 'Carpintería',
				images: "img/carpinteria.jpg",
				link: "carpinteria.html"
			},
			{
				name: 'Albañilería',
				images: "img/albanil.jpg",
				link: "albanil.html"
			},
			{
				name: 'Instalaciones Sanitarias y Gas',
				images: "img/sanitarias-gas.jpg",
				link: "sanitarias-gas.html"
			},
			{
				name: 'Técnico Soldador',
				images: "img/tec-soldador.jpg",
				link: "tec-soldador.html"
			},
			{
				name: 'Inglés',
				images: "img/ingles.jpg",
				link: "ingles.html"
			},
			{
				name: 'Control de Plagas en Jardinería',
				images: "img/ctrol-plagas.jpg",
				link: "ctrol-plagas.html"
			},
			{
				name: 'Creación de Páginas web',
				images: "img/d-web.jpg",
				link: "d-web.html"
			},
			{
				name: 'Decoración artesanal',
				images: "img/decor-artesanal.jpg",
				link: "decor-artesanal.html"
			},
			{
				name: 'Diseñador gráfico',
				images: "img/d-grafico.jpg",
				link: "d-grafico.html"
			},
			{
				name: 'Diseño de indumentaria',
				images: "img/d-indumentaria.jpg",
				link: "d-indumentaria.html"
			},
			{
				name: 'Masajes y Spa',
				images: "img/masajes-spa.jpg",
				link: "masajes-spa.html"
			},
			{
				name: 'Productor de Seguros',
				images: "img/prod-seguros.jpg",
				link: "prod-seguros.html"
			},
			{
				name: 'Profesional en estética',
				images: "img/estetica.jpg",
				link: "estetica.html"
			},
			{
				name: 'Profesional en turismo y hotelería',
				images: "img/hotel-turismo.jpg",
				link: "hotel-turismo.html"
			},
			{
				name: 'Reparación de la electrónica',
				images: "img/rep-electronica.jpg",
				link: "rep-electronica.html"
			}
		];
	});
})();
	


    