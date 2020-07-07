import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

declare var CanvasJS: any;

@Component({
  selector: 'ifmath-est-grafico-setores',
  templateUrl: './est-grafico-setores.component.html',
  styleUrls: ['./est-grafico-setores.component.scss']
})
export class EstGraficoSetoresComponent implements OnInit {

  canvasObj : any;
  hash:String;

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  
  constructor() { }

  ngOnInit() {

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
    chart.render();
    

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
