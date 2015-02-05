(function(){
  var user = [];
  var containerlistaUser = document.getElementById("usuario");
  var randomUser = function(){
    $.ajax({
      url: 'http://api.randomuser.me/',
      dataType: 'json',
      success: function(data){
        // buscando o usuario especifico
        user[0] = data.results[0].user;
        //console.log( user[0] );        
     
        //clear list
        containerlistaUser.innerHTML = "User Random: "; 
        //mostrando todos os abtributos do objeto
        ForInObject(user[0]); 
      }
    });
  };
/**
 * 	Função recursiva responsavel por buscar todos os atributos de um objeto! e colocar na lista 
 *  @param {object} objeto 
 */
  var ForInObject = function(objeto){
    for(var u in objeto){
          if(typeof objeto[u] == "object"){           
            addITEM(u + "{");            
            //recursive
            ForInObject(user[0][u]);         
            addITEM("}");            
          }else{
            console.log(u );
            addITEM(u);  
          }                  
        }
  };
  /**
   * Função que adiciona um eleento a lista! 
   * @param {[type]} CONTENT [description]
   */
  var addITEM = function(CONTENT){
    var item = document.createElement("li");
    item.innerHTML = CONTENT;
    containerlistaUser.appendChild(item);
  };
  
  function _init(){
  	$("#randomButton").click(randomUser);  	
  }
  window.onload = _init;
  
})();



