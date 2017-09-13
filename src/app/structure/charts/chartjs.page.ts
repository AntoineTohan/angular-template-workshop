import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var Chart: any;

@Component({
  selector: 'cat-page',
  templateUrl: './chartjs.html'
})

export class ChartsChartJs implements OnInit {
  ngOnInit() {

    $(function () {

      // LINE CHART
      //var lineCtx = document.getElementById('chart-line').getContext('2d');
      var lineCtx = $("#chart-line")[0].getContext('2d');

      var dataLine = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      };

      new Chart(lineCtx, {
        type: 'line',
        data: dataLine,
        options: {
          scales: {
            xAxes: [{
              display: false
            }]
          }
        }
      });

      // BAR CHART
      //var barCtx = document.getElementById('chart-bar').getContext('2d');
      var barCtx = $("#chart-bar")[0].getContext('2d');

      var dataBar = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      new Chart(barCtx, {
        type: "bar",
        data: dataBar,
        options: {
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      });

      // RADAR CHART
      //var radarCtx = document.getElementById('chart-radar').getContext('2d');
      var radarCtx = $("#chart-radar")[0].getContext('2d');

      var dataRadar = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };

      new Chart(radarCtx, {
        type: 'radar',
        data: dataRadar,
        options: {
          scale: {
            reverse: true,
            ticks: {
              beginAtZero: true
            }
          }
        }
      });

      // POLAR CHART
      //var polarCtx = document.getElementById('chart-polar').getContext('2d');
      var polarCtx = $("#chart-polar")[0].getContext('2d');

      var dataPolar = {
        datasets: [{
          data: [
            11,
            16,
            7,
            3,
            14
          ],
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
          ],
          label: 'My dataset' // for legend
        }],
        labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
        ]
      };

      new Chart(polarCtx, {
        type: 'polarArea',
        data: dataPolar,
        options: {
          elements: {
            arc: {
              borderColor: "#4BC0C0"
            }
          }
        }
      });

      // PIE CHART
      //var pieCtx = document.getElementById('chart-pie').getContext('2d');
      var pieCtx = $("#chart-pie")[0].getContext('2d');

      var dataPie = {
        labels: [
          "Red",
          "Blue",
          "Yellow"
        ],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };

      new Chart(pieCtx, {
        type: 'pie',
        data: dataPie
      });

      // DOUGHTNUT CHART
      //var doughnutCtx = document.getElementById('chart-doughnut').getContext('2d');
      var doughnutCtx = $("#chart-doughnut")[0].getContext('2d');

      var chartDoughnut = {
        labels: [
          "Red",
          "Blue",
          "Yellow"
        ],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };

      new Chart(doughnutCtx, {
        type: 'doughnut',
        data: chartDoughnut
      });



    });

  }
}

