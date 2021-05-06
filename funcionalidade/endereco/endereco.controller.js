angular.module("meuApp").controller("enderecoController", function($scope, enderecoService, $location){
    $scope.app = "Endereco"
    $scope.enderecos = [];
    var paginaAtual=1;
    var maximoDePaginas=5;
    var numeroDaPagina = 1;

    var listarEnderecos = function(numeroDaPagina){
        enderecoService.getEnderecos(numeroDaPagina).then(function(response){
            $scope.enderecos= response.data;
        });
    };
    
    $scope.adicionarEndereco = function(endereco){
        enderecoService.setEndereco(endereco).then(function successCallback(response){
            $scope.enderecoForm.$setPristine();
            $location.path("/novoEndereco");
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
        listarEnderecos(paginaAtual);
    };

    $scope.proximaPagina = function(){
        if(paginaAtual==maximoDePaginas)
            paginaAtual=maximoDePaginas;
        else
            paginaAtual=paginaAtual+1;
        listarEnderecos(paginaAtual);
    };

    var aviso= function(valorAviso){
        if(valorAviso==1){
            $('#msgSucesso').modal('show');
        }else{
            $('#msgErro').modal('show');
        }
    };

    listarEnderecos(numeroDaPagina);
});