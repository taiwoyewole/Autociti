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
            ],
        }],
        
    },

   
    options: {
        responsive: true,
        legend: {
            display: false,
        }
    },
    centerText: {
        display: true,
        text: "280"
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
    },
    centerText: {
        display: true,
        text: "280"
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
    },
    centerText: {
        display: true,
        text: "280"
    }

});
var ctx = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctx, {
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

var ctx = document.getElementById('myLineChart2').getContext('2d');
var chart = new Chart(ctx, {
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

var ctx = document.getElementById('myLineChart3').getContext('2d');
var chart = new Chart(ctx, {
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

    // Configuration options go here
    options: {}
});

