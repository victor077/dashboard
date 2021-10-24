const config3 = { 
    type: "doughnut", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
      labels: ["Brasil Total","Norte", "Nordeste", "Sudeste","Sul","Centro-"], // labels (rótulos) que serão identificados os nossos dados 
      datasets: [ // datasets (conjunto de dados)
        {
          label: "DESEMPREGO POR REGIÃO", // irá conter o rótulo principal do nosso gráfico
          data: [11,10.6, 13.6,11.4,6.8,9.3, ], // os dados referentes aqueles rótulos
          backgroundColor: ['#45ad36','#2d9699','#ebea00','#ef8409','#d31818','#6e6a6a'], // cor das "bolinhas" do gráfico
          borderColor: "white" // cor da "linha" do gráfico
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

  var myChartLine3 = new Chart(document.getElementById("desemprego_por_regiao"), config3); 