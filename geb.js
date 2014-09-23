/**
 * Geb 
 * @description  pega um objeto e retorna o mesmo 
 * 
 * @param seletorFull {string} insira um seletor CSS 
 * @example 
 *  // Evento onLoad para a pagina . ou seja assim que for carregad0
    // todo o conteudo da pagina, os eventos são executados.
    // isto faz com que evite que eu chame funções ou metodos antes
    // dos elementos de marcação estejam na pagina.
    window.onload = function() {
    geb("#teste").innerHTML += "dasdsad";
    geb(".teste")[0].innerHTML += "AAAA";
    geb("div")[0].innerHTML += "BBBB";
    }; 
    
    Teste de performace:
    http://jsperf.com/jquery-vs-native-dom-selectores/2
 *
 */
function geb(seletorFull) {
    var tipo = seletorFull.slice(0, 1),
        name = seletorFull.slice(1, seletorFull.length),
        Doc = document;
    switch (tipo) {
        case "#":
            return Doc.getElementById(name);
        case ".":
            return Doc.querySelectorAll(seletorFull);
        default:
            return Doc.getElementsByTagName(seletorFull);
    }
}
