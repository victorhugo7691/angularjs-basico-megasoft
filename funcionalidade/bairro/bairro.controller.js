angular.module("meuApp").controller("bairroController", function($scope, bairroService, $location){
    $scope.app="Bairro"
    $scope.bairros = [];
    var numeroDaPagina = 1;
    var paginaAtual = 1;
    var maximoDePaginas = 5;
    var bairroSelecionado;
    $scope.erroThrow;

    /*var listarBairros= function(){
        bairroService.getBairros().then(function(response){
            $scope.bairros= response.data;
        });
    };*/
    
    var listarBairros = function(numeroDaPagina){
        bairroService.getBairros(numeroDaPagina).then(function(response){
            $scope.bairros= response.data;
        });
    };
    
    $scope.adicionarBairro = function(bairro){
        bairroService.setBairro(bairro).then(function successCallback(response){
            $scope.bairroForm.$setPristine();
            $location.path("/novoBairro");
            aviso(1);
            //catch
        }, function errorCallback(response){
            aviso(0);
        });
    };

    $scope.editarBairro = function (bairro){
        bairroService.editarBairro(bairro).then(function successCallback(response){
            $scope.bairro = response.data;
            aviso(1);
        }, function errorCallback(response){
            aviso(0);
        });
    };

    $scope.deleteBairro = function(bairro){
        bairroService.deleteBairro(bairro).then(function(response){
            listarBairros(numeroDaPagina); 
            aviso(1);
        }, function errorCallback(response){
            $scope.erroThrow= response.data.error;
            console.log(response.data.error);
            aviso(0);
        });
    };

    $scope.setBairroSelecionado = function(bairro){
        bairroSelecionado= bairro;
    }

    $scope.getBairroSelecionado = function(){
        return bairroSelecionado;
    }

    $scope.foiSelecionado = function(bairros){
        return bairros.some(function(bairros){
            return bairros.selecionado;
        });
    };

    $scope.paginaAnterior = function(){
        if(paginaAtual==1)
            paginaAtual=1;
        else
            paginaAtual=paginaAtual-1;
        listarBairros(paginaAtual);
    };

    $scope.proximaPagina = function(){
        if(paginaAtual==maximoDePaginas)
            paginaAtual=maximoDePaginas;
        else
            paginaAtual=paginaAtual+1;
        listarBairros(paginaAtual);
    };

    var aviso= function(valorAviso){
        if(valorAviso==1){
            $('#msgSucesso').modal('show');
        }else{
            $('#msgErro').modal('show');
        }
    };

    listarBairros(numeroDaPagina);
});