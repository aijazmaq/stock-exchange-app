import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { company } from 'src/app/Models/company';

@Component({
  selector: 'app-add-company-content',
  templateUrl: './add-company-content.component.html',
  styleUrls: ['./add-company-content.component.css']
})
export class AddCompanyContentComponent implements OnInit {
  @Input() name:any;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private fb :FormBuilder){} 

  ngOnInit(): void {
  }
    faIndustry = faIndustry;
    companyForm =  this.fb.group({
    companyName: ['', [Validators.required, Validators.minLength(5)]],
    companyCode: ['', [Validators.required, Validators.minLength(3)]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.companyForm)
    if (this.companyForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.companyForm.value, null, 2));
  }

}
