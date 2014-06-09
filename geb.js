function getid(seletor) {
      return document.getElementById(seletor);
    }
function getclasse(seletor) {
      return document.getElementsByClassName(seletor);
    }
function gettag(seletor) {
      return document.getElementsByTagName(seletor);
    }

function geb(seletor){
    var tipo = seletor.slice(0,1);
    var name = seletor.slice(1,seletor.length);
    console.log(name);    
    switch(tipo){
        case "#": 
          return getid(name);
        case ".": 
          return getclasse(name);
        default: 
          return gettag(seletor);
    }  
}
