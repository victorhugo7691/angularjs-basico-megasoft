angular.module("meuApp").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when("/enderecos",{
		templateUrl: "funcionalidade/endereco/endereco-consulta.html",
    });

	$routeProvider.when("/novoEndereco", {
		templateUrl: "funcionalidade/endereco/endereco-cadastro.html",
	});

	$locationProvider.html5Mode({enabled: true, requireBase: false });
}]);