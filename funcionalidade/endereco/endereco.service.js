angular.module("meuApp").service("enderecoService", function($http, config){

    this.getEnderecos = function(numeroDaPagina){
        return $http.get(config.baseUrl+"/endereco/"+numeroDaPagina);
    }
    
    this.setEndereco = function(endereco){
        return $http.post(config.baseUrl+"/endereco/cadastrar", endereco);
    } ;
});