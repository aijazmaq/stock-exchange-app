import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStockDetailComponent } from './add-stock-detail/add-stock-detail.component';

@Component({
  selector: 'app-add-stock-modal',
  templateUrl: './add-stock-modal.component.html',
  styleUrls: ['./add-stock-modal.component.css']
})
export class AddStockModalComponent implements OnInit {

  constructor(private modalService :NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(AddStockDetailComponent, 
      {
        scrollable: true,
        centered: true ,
        size: 'xl'
      });
    modalRef.componentInstance.name = 'World';
  }
  
}

