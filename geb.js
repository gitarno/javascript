/**
 * gettag 
 * @description retorna um objeto Array de Classes (XPTO)
 * 
 * @seletor {string} ID de um objeto
 */
 function getid(seletor) {
  return document.getElementById(seletor);
}
/**
 * gettag 
 * @description retorna um objeto Array de Classes (XPTO)
 * 
 * @seletor {string} Classe dos objetos
 */
function getclasse(seletor) {
  return document.getElementsByClassName(seletor);
  //Desenvolver: condicional para o IE.
}
/**
 * gettag 
 * @description retorna um objeto Arrayde tags (XPTO)
 * 
 * @seletor {string} TagName dos objetos
 */
function gettag(seletor) {
  return document.getElementsByTagName(seletor);
}
/**
 * Geb 
 * @description  pega um objeto e retorna o mesmo 
 * 
 * @seletor {string} insira um seletor CSS 
 */
function geb(seletor) {
  var tipo = seletor.slice(0, 1);
  var name = seletor.slice(1, seletor.length);
  console.log(name);
  switch (tipo) {
    case "#":
      return getid(name);
    case ".":
      return getclasse(name);
    default:
      return gettag(seletor);
  }
}

/*
 * Evento onLoad para a pagina . ou seja assim que for carregad0
 * todo o conteudo da pagina, os eventos são executados.
 * isto faz com que evite que eu chame funções ou metodos antes
 * dos elementos de marcação estejam na pagina.
 */
window.onload = function() {
  geb("#teste").innerHTML += "dasdsad";
  geb(".teste")[0].innerHTML += "AAAA";
  geb("div")[0].innerHTML += "BBBB";
};

