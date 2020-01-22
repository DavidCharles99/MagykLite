import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bits2u', weight: 91.0079, symbol: 'BTSU'},
  {position: 2, name: 'Nexo', weight: 84.0026, symbol: 'NEXO'},
  {position: 3, name: 'Stake', weight: 76.941, symbol: 'STAK'},
  {position: 4, name: 'Coinomi', weight: 69.0122, symbol: 'COIM'},
  {position: 5, name: 'Infinito', weight: 67.811, symbol: 'IFNO'},
  {position: 6, name: 'Qbao', weight: 67.0107, symbol: 'QBAO'},
  {position: 7, name: 'X-Bet', weight: 64.0067, symbol: 'XBET'},
  {position: 8, name: 'CoinSwitch', weight: 55.9994, symbol: 'CISWH'},
  {position: 9, name: 'Enjin', weight: 48.9984, symbol: 'ENJN'},
  {position: 10, name: 'Atomic', weight: 47.1797, symbol: 'ATMC'},
];

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})

export class TimesheetComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
