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
      window.open('https://drive.google.com/open?id=1OMryT8b9dawfhUqaKTrdbuf6rtiHuu6G', '_blank'); //price sheet
    } else {
      window.open('https://drive.google.com/uc?export=download&id=1dar5ywEgtlxnTEMBdcHjrWFrzJgnSBVf', '_blank'); //tender form
    }
  }
}
