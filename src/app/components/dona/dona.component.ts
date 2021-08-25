import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() titulo: string = 'Sin Titulo';

  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input('labels') doughnutChartLabels: Label[] = ['Dounload Sales','In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];

  @Input() colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
