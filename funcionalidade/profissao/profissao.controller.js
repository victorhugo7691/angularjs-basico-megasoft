angular.module("meuApp").controller("profissaoController", function($scope, profissaoService){
    $scope.app="Profissao"
    $scope.profissoes=[];

    var listarProfissoes= function(){
        profissaoService.getProfissoes().then(function(response){
            $scope.profissoes= response.data;
        });
    };
    
    listarProfissoes();
});