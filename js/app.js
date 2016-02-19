(function(){
	var app = angular.module('myApp', ['ngRoute','cursosCtrles']);


	app.config(function($routeProvider) {

	    $routeProvider
	        .when('/', {
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
	        .when('/cursos/:cursoId', {
	            templateUrl : 'partials/fotografia.html',
	            controller  : 'cursosCtrl'
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

	app.controller('todosCursos',function($scope , $http){
		$http.get('js/cursos.json').success(function(data){
			$scope.inlae = data;
		});
		
	});

	var cursosCtrles = angular.module('cursosListas', [] );

	cursosCtrles.controller('cursosCtrl', ['$scope', '$routeParams',
	  function($scope, $routeParams) {
	    $scope.cursoId = $routeParams.cursoId;
	  }]);
	
})();
	


    