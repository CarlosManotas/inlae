(function(){
	var app = angular.module('myApp', ['ngRoute']);


	app.config(function($routeProvider) {

	    $routeProvider
	        .when('/', {
	            templateUrl : 'partials/home.html',
	            controller  : 'formularioCtrl'
	        })
	        .when('/home', {
	            templateUrl : 'partials/home.html',
	            controller  : 'formularioCtrl'
	        })
	        .when('/inlae', {
	            templateUrl : 'partials/institucion.html',
	            controller  : 'formularioCtrl'
	        })
	        .when('/cursos', {
	            templateUrl : 'partials/cursos.html',
	            controller  : 'todosCursos'
	        })
	        .when('/preguntas', {
	            templateUrl : 'partials/preguntas.html',
	            controller  : 'todosCursos'
	        })
	        .when('cursos/:cursoTitle/:cursoImg/:cursoId/:cursoObjetivo/:cursoRela', {
	            templateUrl : 'partials/detalle.html',
	            controller  : 'todosCursos'
	        })
	        .when('/:cursoTitle/:cursoImg/:cursoId/:cursoObjetivo/:cursoRela', {
	            templateUrl : 'partials/detalle.html',
	            controller  : 'todosCursos'
	        })
	        .otherwise({
	            redirectTo: '/'
	        });
	});


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

	app.controller('todosCursos',['$scope', '$http','$routeParams', function($scope , $http, $routeParams){
		$http.get('js/cursos.json').success(function(data){
			$scope.inlae = data;
		});
		$scope.cursoImg = $routeParams.cursoImg;
	  	$scope.cursoTitle = $routeParams.cursoTitle;
	  	$scope.cursoId = $routeParams.cursoId;
	  	$scope.cursoObjetivo = $routeParams.cursoObjetivo;
	  	$scope.cursoRela = $routeParams.cursoRela;
	}]);
	
	app.filter('escape', function() {
	  return window.encodeURIComponent;
	});
	app.filter('atrapado',function(){
		return window.decodeURIComponent;
	});
	/*app.controller('cursosCtrl', ['$scope', '$routeParams',
	  function($scope, $routeParams) {
	    $scope.cursoId = $routeParams.cursoId;
  	}]);*/
	
})();
	


    