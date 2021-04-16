angular.module("meuApp").config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.when("/profissoes",{
  templateUrl: "funcionalidade/profissao/profissao-consulta.html",
  });//.otherwise({ redirectTo: '/'});

$locationProvider.html5Mode({enabled: true, requireBase: false });
}]);