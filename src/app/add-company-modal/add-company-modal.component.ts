import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyContentComponent } from './add-company-content/add-company-content.component';

@Component({
  selector: 'app-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.css']
})
export class AddCompanyModalComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddCompanyContentComponent,{
      centered: true ,
      size: 'xl'
    });
    modalRef.componentInstance.name = 'World';
  }
}
