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

	app.controller('cursos',function($scope){
		$scope.productos = [
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
				name: 'Electricista',
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
			}
		];
		$scope.cursos = [
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
			}
		];
		$scope.relacionados = [
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
			}
		];		
		
	});


})();
	


    