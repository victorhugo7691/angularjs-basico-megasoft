angular.module("meuApp").service("bairroService", function($http, config){

    /*var _getBairros= function(){
        return $http.get("http://localhost:8081/bairro");
    };*/
    this.getTodosOsBairros= function(){
        return $http.get(config.baseUrl+"/bairro");
    }

    this.getBairros= function(numeroDaPagina){
        return $http.get(config.baseUrl+"/bairro/paginado/"+numeroDaPagina);
    }

    this.setBairro= function(bairro){
        return $http.post(config.baseUrl+"/bairro/cadastrar", bairro);
    }

    this.editarBairro= function(bairro){
        return $http.put(config.baseUrl+"/bairro/"+bairro.id, bairro);
    }

    this.deleteBairro= function(bairro){
        return $http.delete(config.baseUrl+"/bairro/"+bairro.id, bairro.id);
    }
    /*return {
        getBairros: _getBairros
    };*/
});