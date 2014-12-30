//Criando a var Carlos para instanciar um objeto
var carlos = new pessoa();
// Benchmark: http://jsperf.com/targettrust/5
/* 
  406,475
  ±1.60%
  fastest
 */
carlos.falar("legal");
carlos.ouvir("O que?!");
carlos.falar("legal");
carlos.ouvir("O que?!");


/**
  390,474
  ±2.67%
  5% slower
 */
(function(carlos) {
  carlos.falar("legal");
  carlos.ouvir("O que?!");
  carlos.falar("legal");
  carlos.ouvir("O que?!");
})(carlos);


/*
  383,892
  ±2.68%
  7% slower
 */
(function(carlos) {
  carlos.falar("legal");
})(carlos);
(function(carlos) {
  carlos.ouvir("O que?!");
})(carlos);
(function(carlos) {
  carlos.falar("legal");
})(carlos);
(function(carlos) {
  carlos.ouvir("O que?!");
})(carlos);


