import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { CellRendererComponent, FullWidth } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { company } from '../Models/company';
import { stock } from '../Models/stock';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

 constructor( 
 ) {}
  ngOnInit(): void {
 // get list of company handy for the drop down 

  }
  isSubmitted = false;  
  private gridApi!: GridApi;
  stocksData: stock[] | undefined;
  loadingTemplate =`<span class="ag-overlay-loading-center">please select the company to view the stock history</span>`;
  max:number =0;
  min:number =0;
  avg:number =0;
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';



   formgrp = new FormGroup({
    companyCode : new FormControl('', [Validators.required]) 
  });
 
  // Access formcontrols getter
  get companyCode() {
    return this.formgrp.get('companyCode');
  }
 
  // get the data after searching the company
  search(){
    if(this.formgrp.invalid) return
    this.getData(this.formgrp.controls.companyCode.value).subscribe( x=> this.rowData = x);   
    this.calculateStat();
  }

  public columnDefs: ColDef[] = [
    { field: 'price', filter: 'agNumberColumnFilter', resizable: true, width: 300, cellStyle: {textAlign: 'center', borderRight :'#babfc7 1px solid'},suppressSizeToFit: true },
    { headerName: 'Stock Date (MM/DD/YYYY hh:mm )',
      field: 'stockDate',
       minWidth:500, 
      resizable: true,flex: 2, cellStyle: {textAlign: 'center'},
      cellRenderer: (params: { value: DateTime; }) => params.value.toLocaleString(DateTime.DATETIME_SHORT)
      
    } 
   ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData!: stock[];
 
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
 
  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
     
  }
 
  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
 
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  getData( companyCode: string|null): Observable<stock[]>{
 
    console.log(companyCode)
    return of(this.stocks);

    //replace above code with api

  }
  calculateStat() {
    this.min = Math.min(...this.rowData.map(item => item.price));
    this.max = Math.max(...this.rowData.map(item => item.price));
    this.avg = this.avgCalculator(this.rowData.map(item => item.price));
   
 }
 avgCalculator(nums :number[]): number{
 return nums.reduce((a, b) => (a + b)) / nums.length
 }

 

 companies :company[] = [
  new company("Company1", "C01", "Palash", 1000000, "https//google.com","BSE")
]

 stocks= [
  new stock(100, DateTime.fromObject({ year: 2017, month: 7, day: 15, hour: 8, minute: 10})),
  new stock(101, DateTime.fromObject({ year: 2018, month: 10, day: 5, hour: 7, minute: 20 })),
  new stock(105, DateTime.fromObject({ year: 2018, month: 12, day: 14, hour: 10, minute: 40 })),
  new stock(120, DateTime.fromObject({ year: 2019, month: 1, day: 10, hour: 12, minute: 15 })),
  new stock(110, DateTime.fromObject({ year: 2019, month: 2, day: 20, hour: 13, minute: 57 })),
  new stock(115, DateTime.fromObject({ year: 2020, month: 7, day: 7, hour: 11, minute: 45 })),
  new stock(122, DateTime.fromObject({ year: 2020, month: 8, day: 9, hour: 15, minute: 45 })),
  new stock(123, DateTime.fromObject({ year: 2021, month: 9, day: 18, hour: 14, minute: 20 })),
  new stock(115, DateTime.fromObject({ year: 2020, month: 7, day: 7, hour: 11, minute: 45 })),
  new stock(122, DateTime.fromObject({ year: 2020, month: 8, day: 9, hour: 15, minute: 45 })),
  new stock(123, DateTime.fromObject({ year: 2021, month: 9, day: 18, hour: 14, minute: 20 })),
  new stock(115, DateTime.fromObject({ year: 2020, month: 7, day: 7, hour: 11, minute: 45 })),
  new stock(122, DateTime.fromObject({ year: 2020, month: 8, day: 9, hour: 15, minute: 45 })),
  new stock(123, DateTime.fromObject({ year: 2021, month: 9, day: 18, hour: 14, minute: 20 })),
 
 
];
}


