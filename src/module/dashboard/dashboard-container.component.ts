import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if (localStorage.getItem('show') && localStorage.getItem('show') === '1') { } else {
      $('#buttonModal').click();
    //   localStorage.setItem('show','1');
    // }
  }

  download(i) {
    if (i == 1) {
      window.open('https://drive.google.com/open?id=1cKlATFnNH645mL0tMi-WX5RgZUcp6CyQ', '_blank'); //price sheet
    } else {
      window.open('https://drive.google.com/uc?export=download&id=1yomOb78YK_C5zP1Och8hEo5HP2PHZluv', '_blank'); //tender form
    }
  }
}
