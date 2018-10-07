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
      window.open('https://drive.google.com/open?id=1OMryT8b9dawfhUqaKTrdbuf6rtiHuu6G', '_blank'); //price sheet
    } else {
      window.open('https://drive.google.com/uc?export=download&id=1dar5ywEgtlxnTEMBdcHjrWFrzJgnSBVf', '_blank'); //tender form
    }
  }
}
