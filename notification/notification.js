
function notificacoes(timerAuto){
      // verificando se o navegador tem suporte a API
      if (!('Notification' in window)) {
           document.getElementById('bt_abrir').setAttribute('disabled', 'disabled');
           document.getElementById('custom-notificacao').innerHTML = "SEM SUPORTE";
       } else {

           var tituloNotificacao, optionsNotificacao, cont = 0;
           
           function notificar(event) {
               //titulo da notificação
               cont++;
               tituloNotificacao = document.getElementById('tituloNotificacao').value;
               //Corpo, tag, icon... da notificação
               optionsNotificacao = {
                   body: document.getElementById('body').value + "\n " + cont + "º vez mostrado",
                   tag: "custom",
                   // ICONE DA APLICACAO
                   icon: "http://www.seprorgs.org.br/upload/site_associese/138_g.jpg"

               }
               //Verificando se temos permissão para mostrar a mensagem
               Notification.requestPermission(function() {
                   //criando a mensagem
                   var notificacao = new Notification(tituloNotificacao, optionsNotificacao);
                   // mostrando a mensagem
                   notificacao.onshow;
               });
               // evita qualquer tipo de retorno da função 
               return false;
           }
       }
      // Forçar para amostrar a mensagem
      document.getElementById('bt_abrir').onclick = notificar;
      // timer para em tempo em tempo mostrar a mensagem  mesmo com onavegador minimizado 
      // caso o tempo não seja especificado ele não aparece
      if(!!timerAuto)setInterval(notificar, timerAuto);

  }

  

   window.onload = function(){
      // verifica suporte ao comando
      notificacoes(5000);      
   }
