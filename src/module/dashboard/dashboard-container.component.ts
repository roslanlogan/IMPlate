import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  download(i) {
    if (i == 1) {
      window.open('https://drive.google.com/open?id=14kfsUt0oOokEFithuPxYzdibEDw0kPWz', '_blank');
    } else {
      window.open('https://drive.google.com/open?id=13lqsb_LejRAlG7J6qFyxAH_kmmXUCxn-', '_blank');
    }
  }
}
