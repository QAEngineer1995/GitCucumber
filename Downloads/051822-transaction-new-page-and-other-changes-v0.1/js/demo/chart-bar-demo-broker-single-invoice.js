// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
   height: 150,
  data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
        datasets: [{
      data: [15, 25, 35, 45, 55, 65, 75],
      backgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBackgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          display:false
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});



// Bar Chart Example
var ctx = document.getElementById("myBarChartone");
var myBarChart = new Chart(ctx, {
  type: 'bar',
   height: 150,
  data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
        datasets: [{
      data: [15, 25, 35, 45, 55, 65, 75],
      backgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBackgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          display:false
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});



// Bar Chart Example
var ctx = document.getElementById("myBarCharttwo");
var myBarChart = new Chart(ctx, {
  type: 'bar',
   height: 150,
  data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
        datasets: [{
      data: [15, 25, 35, 45, 55, 65, 75],
      backgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBackgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          display:false
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});



// Bar Chart Example
var ctx = document.getElementById("myBarChartthree");
var myBarChart = new Chart(ctx, {
  type: 'bar',
   height: 150,
  data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
        datasets: [{
      data: [15, 25, 35, 45, 55, 65, 75],
      backgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBackgroundColor: ['#6286ED', '#77C285', '#FCE489', '#77C285','#E56862', '#6286ED', '#FCE489'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }]
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          display:false
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + '' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});


