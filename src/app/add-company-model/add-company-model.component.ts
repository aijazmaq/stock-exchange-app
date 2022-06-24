import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyContentComponent } from './add-company-content/add-company-content.component';

@Component({
  selector: 'app-add-company-model',
  templateUrl: './add-company-model.component.html',
  styleUrls: ['./add-company-model.component.css']
})
export class AddCompanyModelComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AddCompanyContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
