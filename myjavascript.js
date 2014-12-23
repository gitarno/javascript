   
var resultado = new Number();
/**
 * [calcular description]
 * @return {[type]} [description]
 */
function calcular(){
  var v1 = new Number(document.getElementsByClassName("valor")[0].value);
  var v2 = new Number(document.getElementsByClassName("valor")[1].value);
  resultado = somar(v1, v2);
}   
/**
 * [somar description]
 * @param  {[type]} numeroA [description]
 * @param  {[type]} numeroB [description]
 * @return {[type]}         [description]
 */
function somar(numeroA, numeroB){
  var retorno = numeroA + numeroB;
  return retorno;
}
/**
 * [imprimir description]
 * @return {[type]} [description]
 */
function imprimir(){
  document.getElementById("resultado").innerHTML = resultado;
}  
/**
 * [onload description]
 * @return {[type]} [description]
 */
window.onload = function(){
  document.getElementById('calcular').addEventListener("click", function(){
    calcular();
    imprimir();
  }); 
} 

// <body onload="escrever();">
