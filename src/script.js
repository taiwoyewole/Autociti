var ctl = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctl, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Revenue',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});

var ctl = document.getElementById('myLineChart2').getContext('2d');
var chart = new Chart(ctl, {
    type: 'line',

    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Amount',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});

var ctl = document.getElementById('myLineChart3').getContext('2d');
var chart = new Chart(ctl, {
    type: 'line',

    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Amount',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});

// Line Chart for mobile view 

var ctl = document.getElementById('mobileLineChart').getContext('2d');
var chart = new Chart(ctl, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Revenue',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});

var ctl = document.getElementById('mobileLineChart2').getContext('2d');
var chart = new Chart(ctl, {
    type: 'line',

    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Amount',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});

var ctl = document.getElementById('mobileLineChart3').getContext('2d');
var chart = new Chart(ctl, {
    type: 'line',

    data: {
        labels: [' 1/28/20 ', '2/3/20 ', '2/3/20 ', '2/17/20', ' 2/24/20'],
        datasets: [{
            label: 'Amount',
            backgroundColor: '#AFCDFD',
            borderColor: '#73A8FC',
            data: [0, 12, 5, 30, 0, 0]
        }]
    },

    options: {}
});



// *************** Doughnut Chart ******************
var ctx = document.getElementById('myChart').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ]
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    },

});

  Chart.pluginService.register({
    beforeDraw: function(doughnutChart) {
      var width = doughnutChart.chart.width,
          height = doughnutChart.chart.height,
          ctx = doughnutChart.chart.ctx;
  
      ctx.restore();
      var fontSize = (height / 220).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
  
      var text = "",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
  
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  });

var ctx = document.getElementById('myChart2').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }

});

var ctx = document.getElementById('myChart3').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }

});

// Doughnut chart for mobile screen 
var ctx = document.getElementById('myMobileChart').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }

});

var ctx = document.getElementById('myMobileChart2').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }

});

var ctx = document.getElementById('myMobileChart3').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [30, 20, 30, 20, 10],
            backgroundColor: [
                '#EB5757',
                '#F2994A',
                '#56CCF2',
                '#F2C94C',
                '#9B51E0'
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    }

});
