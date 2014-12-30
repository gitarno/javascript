// JavaScript Document 
// REVISAR...
// MELHORAR...
// COMENTAR...
/*
 */
(function(){
	window.onload = function(){
		var calculadora = new ObjetoCalculadora('calculadora');
		//Criando o visor
		calculadora.criandoVisor();
		//Criando os Numeros
		calculadora.criarBtsNumeros(10);
		//Criando os Operadores
		calculadora.criarBtsOperadores("+","-","*","/","=");
		//Ativando os numeros abaixo
		calculadora.ativarBotoes ();
	}
	
	/**
	 * Objeto Calculadora com os demais metodos predefinidos
	 * @param {[String]} target [Id do Elemento DOM que irá receber a calculadora]
	 * 
	 * @method criandoVisor
	 * @method criarBtsNumeros
	 * @method criarBtsOperadores
	 * @method ativarBotoes
	 * 
	 */
	var ObjetoCalculadora = function(target){
		var acumulador = "";
		var calc = document.getElementById(target);

		//criando o visor	
		this.criandoVisor = function(){
			var visor = document.createElement("div");
			visor.id = "visor";
			visor.innerHTML = 'Calculadora inteligente';
			calc.appendChild(visor);
		}

		// Função que irá criar os Bt Numerico
		this.criarBtsNumeros = function($qN) {
			/*		
			var qTag = document.createElement('ul');
			var qName = document.createAttribute('id');
			qTag.setAttribute('id','numeros');
			document.getElementById("calculadora").appendChild(qTag);	
		    */
			// criando a TAG 
			calc.innerHTML += '<ul id="numeros"></ul>';
			//var uL = document.getElementsByTagName('ul');
			//	
			for (i=0 ; i < $qN; i++) { 
				calc.getElementsByTagName("ul").item(0).innerHTML += '<li name="bt">' + i + '</li>';
			}
		};

		// Função que irá criar os Bt de Operação
		this.criarBtsOperadores = function () {
			calc.innerHTML += '<ul id="operadores"></ul>';
			for (i=0 ; i < arguments.length ; i++) { 
				calc.getElementsByTagName("ul").item(1).innerHTML += '<li name="bt">' + arguments[i] + '</li>';
			}
				
		}

		this.ativarBotoes = function(){
			for (i=0 ; i < 10; i++){
				document.getElementsByTagName("li").item(i).onclick= function(){
					acumulador = acumulador + this.innerHTML;
					document.getElementById("visor").innerHTML = acumulador ;	
				}
			}
		}
	};


})()
