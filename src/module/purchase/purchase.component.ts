import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PLATINUM_DATA } from '../data/platinum';
import { DIAMOND_DATA } from '../data/diamond';
import { GOLD_DATA } from '../data/gold';
import { SILVER_DATA } from '../data/silver';
import { SUPER_SILVER_DATA } from '../data/superSilver';
import { SUPER_BRONZE_DATA } from '../data/superBronze';
import { BRONZE_DATA } from '../data/bronze';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private router: Router) { }
  searchText: string;
  tableData = this.addPlateNum(DIAMOND_DATA);

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

  selectedType(type) {
    console.log(type.target.value)
    if (type.target.value == 1) {
      this.tableData = this.addPlateNum(DIAMOND_DATA);
    } else if (type.target.value == 2) {
      this.tableData = this.addPlateNum(PLATINUM_DATA);
    } else if (type.target.value == 3) {
      this.tableData = this.addPlateNum(SUPER_SILVER_DATA);
    } else if (type.target.value == 4) {
      this.tableData = this.addPlateNum(SILVER_DATA);
    } else if (type.target.value == 5) {
      this.tableData = this.addPlateNum(SUPER_BRONZE_DATA);
    } else if (type.target.value == 5) {
      this.tableData = this.addPlateNum(BRONZE_DATA);
    }
  }

  addPlateNum(data) {
    console.log(data)
    data.forEach(data => {
      if (data.plateNum.indexOf("IM") == -1) {
        data.plateNum = "IM" + data.plateNum;
      }
    })
    return data;
  }
  proceedBooking(plateNumber) {
    window.open('https://drive.google.com/uc?export=download&id=1dar5ywEgtlxnTEMBdcHjrWFrzJgnSBVf', '_blank');
  }
}
