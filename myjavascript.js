//Meu javascript
/*
var nome = "Arno",
	telefone = 99079060,
	email = "arno@advg.com.br";

var mensagem = "Nome "+nome;
	mensagem += "\nTelefone "+telefone;
	mensagem += "\nE-mail "+ email;


var alunos = [
 ['Arno',99079060],
 ['Ricardo',234],
 ['Diego',343462],
 ['Dias',2345345],
 ['Guilherme',345134],
 ['Francis',3425345]
];

// .... 

var alunos = [
	{
	"nome"		: "Zezinho",
	"idade"		: 18,
	"matricula"	: true,
	"falar"		: function(){
		alert(this.idade);
		}
	},
	{
	"nome"		: "Huguinho",
	"idade"		: 18,
	"matricula"	: false,
	"falar"		: function(){
		alert(this.idade);
		}
	}
];
console.log(alunos);


*/

// funções
/**
 * [somar description]
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */

var alunosObjeto = [
	{
	"nome"		: "Zezinho",
	"idade"		: 18,
	"matricula"	: true,
	"falar"		: function(){
		alert(this.idade);
		}
	},
	{
	"nome"		: "Huguinho",
	"idade"		: 18,
	"matricula"	: false,
	"falar"		: function(){
		alert(this.idade);
		}
	}
];
function somar(parametroA, parametroB){
	var resultado = parametroB + parametroA;
	console.log(typeof(resultado));
	return resultado;
}
function subtrair(parametroA, parametroB){
	var resultado = parametroB - parametroA;
	return resultado;
}
function multiplicar(parametroA, parametroB){
	var resultado = parametroB * parametroA;
	return resultado;
}
function dividir(parametroA, parametroB){
	var resultado = parametroB / parametroA;
	return resultado;
}


window.onload = function(){
	// manipular DOM
	8

	var alunos = [
		
		'Ricardo',
		'Diego',
		'Arno',
		'Dias',
		'Guilherme',
		'Francis'
	];

	var lista = document.getElementById('listadealunos');

	

	for(i in alunos){
		if ( alunos[i] == "Arno") {
			lista.innerHTML += "<li>" + alunos[i] + " - A mAgia </li>";			
		}else{
			lista.innerHTML += "<li>" + alunos[i] + "</li>";
		};
	}
*/

	var campoTexto = document.getElementById('campoTexto');
	campoTexto.onchange = function(){
		console.log(this.value);
		lista.innerHTML += "<li>" + this.value + "</li>";
		this.value = "";
	}



}
