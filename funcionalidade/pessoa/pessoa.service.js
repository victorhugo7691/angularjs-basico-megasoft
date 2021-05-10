angular.module("meuApp").service("pessoaService", function($http, config){

    this.getPessoas= function(numeroDaPagina){
        return $http.get(config.baseUrl+"/pessoa/"+numeroDaPagina);
    };

    this.getPdf = function(){
        window.open(config.baseUrl+"/pessoa/imprimir");
    };

    this.deletePessoa = function(pessoa){
        return $http.delete(config.baseUrl+"/pessoa/"+pessoa.cpf, pessoa);
    };

});