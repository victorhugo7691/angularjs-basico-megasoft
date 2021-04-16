angular.module("meuApp").factory("profissaoService", function($http, config){

    var _getProfissoes = function(){
        return $http.get(config.baseUrl+"/profissao");
    };

    return {
        getProfissoes: _getProfissoes
    };
});