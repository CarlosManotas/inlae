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
	        .when('cursos/:cursoId', {
	            templateUrl : 'partials/detalle.html',
	            controller  : 'cursosCtrl'
	        })
	        .when('/:cursoId', {
	            templateUrl : 'partials/detalle.html',
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

	app.controller('todosCursos',['$scope', '$http', function($scope , $http){
		$http.get('js/cursos.json').success(function(data){
			$scope.inlae = data;
		});
	}]);
	

	/*app.controller('cursosCtrl', ['$scope', '$routeParams',
	  function($scope, $routeParams) {
	    $scope.cursoId = $routeParams.cursoId;
  	}]);*/
	
	app.controller('cursosCtrl', ['$scope', '$routeParams', '$http',
	  function($scope, $routeParams, $http) {
	  	$scope.cursoId = $routeParams.cursoId;
	    $http.get('cursos/' + $routeParams.cursoId + '.json' || '/' + $routeParams.cursoId + '.json' || 'home/' + $routeParams.cursoId + '.json').success(function(data) {
	      $scope.curso = data;
	    });
	  }]);
})();
	


    