angular.module("meuApp").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when("/pessoas",{
		templateUrl: "funcionalidade/pessoa/pessoa-consulta.html",
    });

	$locationProvider.html5Mode({enabled: true, requireBase: false });
}]);