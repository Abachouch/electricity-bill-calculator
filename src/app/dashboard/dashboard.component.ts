import { Component, OnInit } from '@angular/core';
import { DataRow } from '../data-row';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: DataRow[];

  chart: ChartRow[];

  constructor() { }

  ngOnInit() {
    if (localStorage.data) {
      this.data = JSON.parse(localStorage.data);


      for (var i: number; i < this.data.length; i++) {
        this.chart.push({ value: 25 + i, month: 25 });
      }
    }

  }

  getPercent(n: number) {
    let chartHeight = 300;//px
    
  }

  formateDate(date: string) {
    let secs = Date.parse(date);
    let d: Date = new Date(secs);
    console.log(d);

    return d.getMonth() + "/" + d.getFullYear();
  }

}

export interface ChartRow {
  value: number;
  month: number;
}