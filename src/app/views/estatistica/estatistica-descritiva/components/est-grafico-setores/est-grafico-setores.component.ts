import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'


@Component({
  selector: 'ifmath-est-grafico-setores',
  templateUrl: './est-grafico-setores.component.html',
  styleUrls: ['./est-grafico-setores.component.scss']
})
export class EstGraficoSetoresComponent implements OnInit {

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  
  constructor() { }

  ngOnInit() {

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
      
  });

  }

}
