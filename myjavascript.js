// 

function ativarDiv(elemento){
	elemento.addEventListener("click", function(){
	    var conteudo = this.innerHTML;
			var h1 = document.createElement("h1");
			h1.innerHTML = conteudo;

			this.parentNode.insertBefore(h1,this);
			this.parentNode.removeChild(this);
	});
}


window.onload=function(){
	
	var divs = document.getElementsByTagName('div');
	//divs[0].innerHTML = "TEstando";
	divs[0].id = "TEstando";
	divs[0].className = "TEstando";

	for(x in divs){
		ativarDiv(divs[x]);
	}

	document.getElementsByClassName('addTelefone')[0].addEventListener("click", function(){
			var input = document.createElement("input");
			input.type = 'number'
			this.parentNode.insertBefore(input,this);

	});


}
