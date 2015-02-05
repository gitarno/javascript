
   /*   
var anual = {
   '2013':{
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
     },
  '2014':{
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
      },
  '2015':{
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000    
    }
};




var mensal = {
  'Dezembro':{
      'ano':2013,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
     },
   'Janeiro':{
      'ano':2014,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
     },
  'Fevereiro':{
      'ano':2014,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
      },
  
  'Março':{
      'ano':2014,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000    
    },
  'Abril':{
      'ano':2014,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
     },
  'Maio':{
      'ano':2014,
      'Faturamento':400,
      'Volume vendas':5000,
      'Produto habilitado':5000 
      },
};
*/

var anual = {
  'volume':{
    '2013':245,
    '2014':534,
    '2015':341,
  },  
  'produtos':{
    '2013':65,
    '2014':105,
    '2015':87,
  }
};
//IDEIA DE COMO SERIA UM 'PUSH' para esses dados... 
anual['faturamento'] = {
    '2013':400,
    '2014':500,
    '2015':50,
};



// Apenas mostrando todo o objeto 
for (var i in anual){
 // console.log(i);
}


var data_anual =  [
    [
      'Anual', 
      'Faturamento', 
      'Volume de Vendas', 
      'Produtos'
    ],    
    [
     '2013', 
     anual.faturamento['2013'],
     anual.volume['2013'], 
     anual.produtos['2013']
    ],
    [
     '2014', 
     anual.faturamento['2014'],
     anual.volume['2014'], 
     anual.produtos['2014']
    ],
    [
     '2015', 
     anual.faturamento['2015'],
     anual.volume['2015'], 
     anual.produtos['2015']
    ]  
];

var data_faturamento =  [
    [
      'Anual', 
      'Faturamento'
    ],    
    [
     '2013', 
     anual.faturamento['2013']
    ],
    [
     '2014', 
     anual.faturamento['2014']
    ],
    [
     '2015', 
     anual.faturamento['2015']
    ]  
];


console.log(window.navigator.plugins);

// O CODE REALMENTE DE RENDER

 google.load("visualization", "1.1", {
   packages:["bar"]
 });
 
 var onResize;
 window.onresize = function(){
   clearTimeout(onResize);
   onResize = setTimeout(function(){
     drawChart(data_anual,'columnchart_material');
     drawChart(data_faturamento,'columnchart_materialB');
     drawChart(data_anual,'columnchart_materialC');
     drawChart(data_anual,'columnchart_materialD');
     drawChart(data_anual,'columnchart_materialE');
   }, 100);
 };
 

 function drawChart(dados,target) {
  var data = google.visualization.arrayToDataTable(dados);
  var options = {
    chart: {
      title: 'Gráficos',
      subtitle: 'Faturamento, Volume de vendas, e  Produtos',
    }
  };
    var chart = new google.charts.Bar(document.getElementById(target));

    chart.draw(data, options);
  }