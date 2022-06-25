import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-stock-detail',
  templateUrl: './add-stock-detail.component.html',
  styleUrls: ['./add-stock-detail.component.css']
})
export class AddStockDetailComponent implements OnInit {

  @Input() name:any;
  constructor(public activeModal: NgbActiveModal){} 

  ngOnInit(): void {
  }

}
