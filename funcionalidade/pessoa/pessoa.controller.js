angular.module("meuApp").controller("pessoaController", function($scope, pessoaService, $location){
    $scope.app="Pessoa"
    $scope.pessoas=[];
    var paginaAtual=1;
    var maximoDePaginas=5;
    var numeroDaPagina = 1;
    var pessoaSelecionada;

    var listarPessoas = function(numeroDaPagina){
        pessoaService.getPessoas(numeroDaPagina).then(function(response){
            $scope.pessoas= response.data;
        });
    };

    $scope.imprimirPessoas = function(){
        pessoaService.getPdf();
    };
    
    $scope.deletePessoa = function(pessoa){
        pessoaService.deletePessoa(pessoa).then(function(response){
            listarPessoas(numeroDaPagina); 
            aviso(1);
        }, function errorCallback(response){
            aviso(0);
        });
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

    $scope.setPessoaSelecionada = function(pessoa){
        pessoaSelecionada= pessoa;
    }

    $scope.getPessoaSelecionada = function(){
        return pessoaSelecionada;
    }

    var aviso= function(valorAviso){
        if(valorAviso==1){
            $('#msgSucesso').modal('show');
        }else{
            $('#msgErro').modal('show');
        }
    };

    listarPessoas(numeroDaPagina);
});