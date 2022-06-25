import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-company-content',
  templateUrl: './add-company-content.component.html',
  styleUrls: ['./add-company-content.component.css']
})
export class AddCompanyContentComponent implements OnInit {
  @Input() name:any;
  constructor(public activeModal: NgbActiveModal){} 

  ngOnInit(): void {
  }

}
