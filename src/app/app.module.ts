import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyContentComponent } from './add-company-modal/add-company-content/add-company-content.component';
import { AddCompanyModalComponent } from './add-company-modal/add-company-modal.component';
import { AddStockModalComponent } from './add-stock-modal/add-stock-modal.component';
import { AddStockDetailComponent } from './add-stock-modal/add-stock-detail/add-stock-detail.component';
import { SearchStockComponent } from './search-stock/search-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCompanyContentComponent,
    AddCompanyModalComponent,
    AddStockModalComponent,
    AddStockDetailComponent,
    SearchStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    NgbModule 
    
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
