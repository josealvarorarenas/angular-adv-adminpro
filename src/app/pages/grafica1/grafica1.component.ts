import { Component } from '@angular/core';
import { ChartData } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1 : string[] =  [ 'Dato2', 'Dato3', 'Dato4' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };

}
