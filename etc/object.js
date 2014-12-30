var pessoa = function() {
  this.nome = 'Arno';
  this.idade = 30;
  this.falar = function(parametro) {
    window.alert(parametro);
  }
  this.ouvir= function(parametro) {
    return window.prompt(parametro);
  }
};