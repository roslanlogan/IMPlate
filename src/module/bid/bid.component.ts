import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  download(i) {
    if (i == 1) {
      window.open('https://drive.google.com/open?id=1ECdc5aQXgD1jvk1w-4vTPQAzedW_OZQp', '_blank'); //price sheet
    } else {
      window.open('https://drive.google.com/uc?export=download&id=13lqsb_LejRAlG7J6qFyxAH_kmmXUCxn-', '_blank'); //tender form
    }
  }
}
