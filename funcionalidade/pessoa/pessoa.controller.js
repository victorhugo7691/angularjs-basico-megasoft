angular.module("meuApp").controller("pessoaController", function($scope, $http, pessoaService){
    $scope.app="Pessoa"
    $scope.pessoas=[];

    var listarPessoas= function(){
        pessoaService.getPessoas().then(function(data){
            $scope.pessoas= data;
        }).error(function(data, status){
            $scope.message="Não foi possível listar as pessoas "+data;
        });
    };

    var listarPessoaPorNome= function(nome){
        pessoaService.getPessoaPorNome().then(function(data){
            $scope.pessoas= data;
        }).error(function(data, status){
            $scope.message="Não foi possível consultar a pessoa "+data;
        });
    };

    var listarPessoaDto= function(){
        pessoaService.getPessoaDto().then(function(data){
            $scope.pessoas= data;
        }).error(function(data, status){
            $scope.message="Não foi possível listar as pessoas "+data;
        });
    };

    var listarPessoasPorBairro= function(bairro){
        pessoaService.getPessoaPorBairro().then(function(data){
            $scope.pessoas= data;
        }).error(function(data, status){
            $scope.message="Não foi possível listar as pessoas por bairro "+data;
        });
    };

    var adicionarPessoa= function(pessoaEntrada){ //function(nome, idade...)
        $scope.pessoas.push(pessoaEntrada);//(nome,idade...) no html ng-click="adicionarPeddoa(nome, idade...)"
        delete $scope.pessoaEntrada;//Remove a informação da tela
    }

    listarPessoas();
    listarPessoaPorNome();
    listarPessoaDto();
    listarPessoasPorBairro();
    adicionarPessoa(pessoaEntrada);
});