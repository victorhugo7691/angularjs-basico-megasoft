angular.module("meuApp").controller("pessoaController", function($scope, pessoaService, $location){
    $scope.app="Pessoa"
    $scope.pessoas=[];
    var paginaAtual=1;
    var maximoDePaginas=5;
    var numeroDaPagina = 1;

    var listarPessoas = function(numeroDaPagina){
        pessoaService.getPessoas(numeroDaPagina).then(function(response){
            $scope.pessoas= response.data;
        });
    };

    $scope.imprimirPessoas = function(){
        pessoaService.getPdf();
    };
    
    $scope.paginaAnterior = function(){
        if(paginaAtual==1)
            paginaAtual=1;
        else
            paginaAtual=paginaAtual-1;
            listarPessoas(paginaAtual);
    };

    $scope.proximaPagina = function(){
        if(paginaAtual==maximoDePaginas)
            paginaAtual=maximoDePaginas;
        else
            paginaAtual=paginaAtual+1;
            listarPessoas(paginaAtual);
    };

    listarPessoas(numeroDaPagina);
});