// TargetTrust
function incluir($arquivo){
	
	var divisao = $arquivo.split(".");
	var ext = divisao[divisao.length-1];
	
	switch(ext) {
		case "js": 
			var elemento = document.createElement("script");
			elemento.src = $arquivo;
			var head = document.getElementsByTagName("head").item(0)
			head.appendChild(elemento);
		break;
		case "css": 
			var elemento = document.createElement("link");
			elemento.href = $arquivo;
			elemento.rel = "stylesheet";
			var head = document.getElementsByTagName("head").item(0)
			head.appendChild(elemento);
		break;
		
		
		default: 
			alert("extensao errada");
		break
			
	}
	
	
	
	
}

incluir("jquery-1.11.0.js");
incluir("jquery-1.11.0.css");
