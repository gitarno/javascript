/**
 * Manipulando a DOM (<head>) 
 *  
 * @param  {String} $arquivo [Nome do Arquivo que deseja incluir]
 * @return {Bollean} false        
 */

function incluir($arquivo){
	var divisao = $arquivo.split(".");
	var ext = divisao[divisao.length-1];
	var head = document.getElementsByTagName("head").item(0);
	switch(ext) {
		case "js": 
			var elemento = document.createElement("script");
			elemento.src = $arquivo;
			head.appendChild(elemento);
		break;
		case "css": 
			var elemento = document.createElement("link");
			elemento.href = $arquivo;
			elemento.rel = "stylesheet";
			head.appendChild(elemento);
		break;	
		default: 
			alert("extensão errada");
		break
	};
	return false;
}

incluir("myjavascript.js");
incluir("mystyle.css");
