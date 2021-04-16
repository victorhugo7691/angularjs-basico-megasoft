angular.module("meuApp").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when("/bairros",{
		templateUrl: "funcionalidade/bairro/bairro-consulta.html",
		/*controller: "bairroController",
		resolve: {
			bairros: function (bairroService) {
				return bairroService.getBairros(1);
			}
		}*/
    })//.otherwise({ redirectTo: '/'});

	$routeProvider.when("/novoBairro", {
		templateUrl: "funcionalidade/bairro/bairro-cadastro.html",
	});

	$locationProvider.html5Mode({enabled: true, requireBase: false });
}]);