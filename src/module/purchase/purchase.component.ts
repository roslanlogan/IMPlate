import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private router:Router) { }
  searchText: string;
  tableData = [
    { plateNum: 'Q100', price: 'RM12000' },
    { plateNum: 'Q103', price: 'RM12000' },
    { plateNum: 'Q200', price: 'RM12000' },
    { plateNum: 'Q600', price: 'RM12000' },
    { plateNum: 'Q203', price: 'RM12000' },
    { plateNum: 'Q300', price: 'RM12000' },
    { plateNum: 'Q600', price: 'RM12000' },
    { plateNum: 'Q203', price: 'RM12000' },
    { plateNum: 'Q300', price: 'RM12000' },
    { plateNum: 'Q600', price: 'RM12000' },
    { plateNum: 'Q203', price: 'RM12000' },
    { plateNum: 'Q300', price: 'RM12000' },
    { plateNum: 'Q600', price: 'RM12000' },
  ];

  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].includes(searchKey);
      });
    });
  }

  search() {
    if (!this.searchText) {
      return this.tableData;
    }
    if (this.searchText) {
      return this.filterIt(this.tableData, this.searchText);
    }
  }
  ngOnInit() {
  }

  proceedBooking(plateNumber){
    // this.router.navigate(['purchase/booking/'+plateNumber]);
  }
}
