import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';
import { company } from 'src/app/Models/company';

@Component({
  selector: 'app-add-stock-detail',
  templateUrl: './add-stock-detail.component.html',
  styleUrls: ['./add-stock-detail.component.css']
})
export class AddStockDetailComponent implements OnInit {
  submitted = false;
  faBusinessTime = faBusinessTime;
  myInterval: any;
  curDateTime: DateTime = DateTime.local();
  displayDateTime: string = this.curDateTime.toLocaleString(DateTime.DATETIME_SHORT);
  constructor(public activeModal: NgbActiveModal, private fb :FormBuilder){} 
  
  ngOnInit() {
    this.curTimefunc()
    this.myInterval = setInterval(() => {
      this.curTimefunc()
    }, 1000)
  }

  // if using setInterval then be sure to clean up else it will keep
  // firing after the component is destroyed
  ngOnDestory() {
    clearInterval(this.myInterval)
  }

  curTimefunc() {
     this.curDateTime = DateTime.local();
     this.displayDateTime = this.curDateTime.toLocaleString(DateTime.DATETIME_SHORT);
     this.stockForm.controls.stockDate.setValue(this.curDateTime)
  }

    stockForm =  this.fb.group({
      companyCode :  ['', [Validators.required]],
      price: ['', [Validators.required, Validators.minLength(5),  Validators.pattern("^[0-9]*$")]],
      stockDate: [ this.curDateTime]
  });

  get f(): { [key: string]: AbstractControl } {
    return this.stockForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // submit to the db and print toaster msg on successfull save
    console.log(this.stockForm)
    if (this.stockForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.stockForm.value, null, 2));
  }

  companies :company[] = [
    new company('company1','c01'),
    new company('company2','c02'),
    new company('company3','c03'),
    new company('company4','c04'),
    new company('company5','c05'),
    new company('company6','c06'),
    new company('company7','c07'),
    new company('company8','c08'),
    new company('company9','c09'),
    new company('company10','c10'),
    new company('company11','c11'),
    new company('company12','c12'),
    new company('company13','c13'),
    new company('company14','c14'),
    new company('company15','c15'),
    new company('company16','c16'),  
  ]

}
