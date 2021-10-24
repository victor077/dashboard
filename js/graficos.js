// Inicia uma variável do tipo constante (não pode ser reatribuida)
  const config = { 
    type: "line", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
      labels: ["2011", "2012", "2013","2014","2015","2016","2017","2018","2019","2020","2021"], // labels (rótulos) que serão identificados os nossos dados 
      datasets: [ // datasets (conjunto de dados)
        {
          label: "SALÁRIO MINIMO", // irá conter o rótulo principal do nosso gráfico
          data: [540.00, 622,678,724,788,880,937,954,998,1045,1100 ], // os dados referentes aqueles rótulos
          backgroundColor: "#2196F3", // cor das "bolinhas" do gráfico
          borderColor: "#3F51B5" // cor da "linha" do gráfico
        }
      ]
    },
    options: {
      maintainAspectRatio: false 
      /* maintainAspectRatio (manter relação de aspecto) 
        caso true: ele "obdece" a altura e largura que colocamos
        caso false: ele não "obdece" a altura e largura que colocamos e se ajusta ao componente pai
      */
    }
  }

  var myChartLine = new Chart(document.getElementById("salario_minimo"), config); 
  /* aqui obrigatoriamente tem que colocar new Chart() para criar um novo chart 
  e passar dentro dos (parênteses) o elemento canvas que você quer mandar e 
  separado pela virgula o que você quer mandar, no nosso caso a config que fizemos 
  */