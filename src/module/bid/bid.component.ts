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
      window.open('https://drive.google.com/open?id=1cKlATFnNH645mL0tMi-WX5RgZUcp6CyQ', '_blank'); //price sheet
    } else {
      window.open('https://drive.google.com/uc?export=download&id=1yomOb78YK_C5zP1Och8hEo5HP2PHZluv', '_blank'); //tender form
    }
  }
}
