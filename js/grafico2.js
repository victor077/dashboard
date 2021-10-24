const config2 = { 
    type: "bar", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
      labels: ["Norte", "Nordeste", "Sudeste","Sul","Centro-Oeste"], // labels (rótulos) que serão identificados os nossos dados 
      datasets: [ // datasets (conjunto de dados)
        {
          label: "MÉDIA DE SALÁRIO POR REGIÃO", // irá conter o rótulo principal do nosso gráfico
          data: [1711, 1539,2585,2499,2498,], // os dados referentes aqueles rótulos
          backgroundColor: "#d31818", // cor das "bolinhas" do gráfico
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

  var myChartLine2 = new Chart(document.getElementById("media_de_salario_por_regiao"), config2); 