import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[]=['Label1','Label2','Label3'];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [10,50,150],
       //aqui se aplican los colores que va a tener la gráfica
       backgroundColor:['#9E120E','#FF5800','#FFB414']
     },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
