import { Component, OnInit, ViewChild } from '@angular/core';
//ChartJS
//import { Chart } from 'chart.js'
//ApexCharts
import { ApexOptions } from 'apexcharts';
 
//CnavasJS
declare var CanvasJS: any;

//Apex Charts
declare var ApexCharts: any;

@Component({
  selector: 'ifmath-est-grafico-setores',
  templateUrl: './est-grafico-setores.component.html',
  styleUrls: ['./est-grafico-setores.component.scss']
})
export class EstGraficoSetoresComponent implements OnInit{
  
  public chartOptions: Partial<ApexOptions>;

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  
  constructor() {
  }

  ngOnInit() {

    this.chartOptions = {
      series: [44, 55, 13, 43, 22, 20, 100, 12, 33, 60],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"],
      colors: ['#F44336','#E91E63', '#9C27B0','#00FF7F','#FFA500','#1E90FF','#008000',
               '#A0522D','#FFFF00','#A9A9A9'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              fill:{ colors: ["#1A73E8", "#B32824","#fff","#ggg"]}
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
    /*
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    var chart = new ApexCharts('#chart', options);
    chart.render();*/

    /*
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };*/

    /*
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Desktop Browser Market Share in 2016"
      },
      data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 51.08, label: "Chrome" },
          { y: 27.34, label: "Internet Explorer" },
          { y: 10.62, label: "Firefox" },
          { y: 5.02, label: "Microsoft Edge" },
          { y: 4.07, label: "Safari" },
          { y: 1.22, label: "Opera" },
          { y: 0.44, label: "Others" }
        ]
      }]
    });
    chart.render();*/
    

    /*
    var myChart = new Chart("estChart", {
      type: 'pie',
      data: {
        labels: this.pieChartLabels,
        datasets: [{
          data: this.pieChartData,
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
          ]
        }],
      },
      options: {
          animation: {animateScale: true},
        }, 
      
  });*/

  }

}
