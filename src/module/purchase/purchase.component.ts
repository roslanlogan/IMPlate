import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private router: Router) { }
  searchText: string;
  tableDataDiamon = [];

  tableDataPlatinum = [
    { plateNum: 'IM100', price: 'RM12000' },
    { plateNum: 'IM103', price: 'RM12000' },
    { plateNum: 'IM200', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
  ];

  tableDataGold = [
    { plateNum: 'IM100', price: 'RM12000' },
    { plateNum: 'IM103', price: 'RM12000' },
    { plateNum: 'IM200', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },];

  tableDataSuperSilver = [
    { plateNum: 'IM100', price: 'RM12000' },
    { plateNum: 'IM103', price: 'RM12000' },
    { plateNum: 'IM200', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },];

  tableDataSilver = [
    { plateNum: 'IM100', price: 'RM12000' },
    { plateNum: 'IM103', price: 'RM12000' },
    { plateNum: 'IM200', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },];

  tableDataSuperBronze = [
    { plateNum: 'IM100', price: 'RM12000' },
    { plateNum: 'IM103', price: 'RM12000' },
    { plateNum: 'IM200', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },
    { plateNum: 'IM203', price: 'RM12000' },
    { plateNum: 'IM300', price: 'RM12000' },
    { plateNum: 'IM600', price: 'RM12000' },];

  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].includes(searchKey);
      });
    });
  }

  search() {
    if (!this.searchText) {
      return this.tableDataSuperBronze;
    }
    if (this.searchText) {
      return this.filterIt(this.tableDataSuperBronze, this.searchText);
    }
  }
  ngOnInit() {
  }

  proceedBooking(plateNumber) {
    window.open('https://drive.google.com/file/d/13lqsb_LejRAlG7J6qFyxAH_kmmXUCxn-/view?usp=sharing', '_blank');
  }
}
