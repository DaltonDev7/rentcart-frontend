import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-generico',
  templateUrl: './table-generico.component.html',
  styleUrls: ['./table-generico.component.scss']
})
export class TableGenericoComponent implements OnInit {

  @Input () tableColumnas!: string[];
  @Input () tableData!: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableColumnas);
    console.log(this.tableData);
    
    
  }

}
