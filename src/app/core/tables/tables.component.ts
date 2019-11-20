import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
/*
Table component class
*/
export class TablesComponent implements OnInit {
  @Input() tableName: string;
  @Input() headerItems: string[];
  @Input() bodyItems: any[];
  @Input() editbtn: boolean;
  constructor() { }

  ngOnInit() {
  }

}
