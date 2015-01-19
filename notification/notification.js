var notificar = (function (window) {
    function Notificar(titulo,opcoes) {        
        if (window.Notification && Notification.permission === "granted") {
            var notificacao = new Notification(titulo,opcoes);
            notificacao.onshow = function () {
                window.setTimeout(notificacao.close.bind(notificacao), 10000);
            };
        } else {
            Notification.requestPermission(function (status) {
                // This allows to use Notification.permission with Chrome/Safari
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
            });
        }
    }
    return Notificar;
})(window);

window.addEventListener("load",function(){
    document.getElementById('bt_abrir').addEventListerner('click',function(){
      notificar("Titulo",{
        body:"Corpo da mensagem",
        icon:"http://url.com.br",
        dir:"ltr",
        tag:"Notification, Gitarno, Arno"
      });
   });
});
      
