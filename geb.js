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
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                return Doc.querySelectorAll(seletorFull);
            }else{
                return Doc.getElementsByClassName(name);
            }

            
        default:
            return Doc.getElementsByTagName(seletorFull);
    }
}
