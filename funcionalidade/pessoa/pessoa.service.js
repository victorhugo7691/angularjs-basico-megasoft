angular.module("meuApp").service("pessoaService", function($http){
    this.getPessoas= function(){
        return $http.get("http://localhost:8081/pessoa");
    }//config.baseUrl+

    this.getPessoaPorNome= function(nome){
        return $http.get("http://localhost:8081/pessoa/"+nome);
    }
    
    this.getPessoaDto= function(){
        return $http.get("http://localhost:8081/pessoa/dto");
    }
    
    this.getPessoaPorBairro= function(bairro){
        return $http.get("http://localhost:8081/pessoa/bairro/"+bairro);
    }
    
    /*Verificar
    this.setPessoa= function(){
        return $http.get("http://localhost:8081/pessoa/cadastrar");
    }*/
});