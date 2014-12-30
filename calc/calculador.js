// JavaScript Document
//1 PARTE 

var calc;
var acumulador = "";
//var $d = document;
window.onload = function(){
	//1p criando a  div calculadora
	document.body.innerHTML = '<div id="calculadora"> </div>';
	//2p criando uma variavel para acessar o conteudo da calculadora.
	calc = document.getElementById('calculadora');
	//3p Testaremos se estamos acessando o elemento criado! 	
	//**************	calc.innerHTML  = "legal";
	//criando o visor
	calc.innerHTML += '<div id="visor"> Calculadora inteligente </div>';		
	//criando a LISTA que irá receber nossos numeros
	//Declaração da função que chama os Numeros
	criarBtsNumeros(10);
	//Declaração da função que chama os Operadores
	criarBtsOperadores("+","-","*","/","=");
	// criando os numeros abaixo
	ativarBotoes ();
}


// Função que irá criar os Bt Numerico
function criarBtsNumeros($qN) {
	
	
/*	var qTag = document.createElement('ul');
	var qName = document.createAttribute('id');
	qTag.setAttribute('id','numeros');
	
	document.getElementById("calculadora").appendChild(qTag);	
*/	
	// criando a TAG 
	calc.innerHTML += '<ul id="numeros"></ul>';
	//var uL = document.getElementsByTagName('ul');
	
	for (i=0 ; i < $qN; i++) { 
		calc.getElementsByTagName("ul").item(0).innerHTML += '<li name="bt">' + i + '</li>';
	}
	
	
}

// Função que irá criar os Bt de Operação
function criarBtsOperadores() {
	//cria o segunda lista! 
	calc.innerHTML += '<ul id="operadores"></ul>';

	for (i=0 ; i < arguments.length ; i++) { 
		calc.getElementsByTagName("ul").item(1).innerHTML += '<li name="bt">' + arguments[i] + '</li>';
	}
		
}

function ativarBotoes (){
	for (i=0 ; i < 10; i++){
	document.getElementsByTagName("li").item(i).onclick= function(){
		//alert(this.innerHTML);
		acumulador = acumulador + this.innerHTML;
		document.getElementById("visor").innerHTML = acumulador ;	
	}
	}
}



