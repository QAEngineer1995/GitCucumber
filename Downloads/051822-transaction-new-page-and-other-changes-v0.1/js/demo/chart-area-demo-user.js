// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        borderColor: "rgba(98, 134, 237, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        pointRadius: 0
      },  
      {
        label: '# of Points',
        data: [7, 11, 5, 8, 3, 7,7, 11, 5, 8, 3, 7],
        borderWidth: 2,
        borderColor: "rgba(252, 228, 137, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        pointRadius: 0
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10
        
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [1],
          zeroLineBorderDash: [1]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

