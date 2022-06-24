import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyModelComponent } from './add-company-model.component';

describe('AddCompanyModelComponent', () => {
  let component: AddCompanyModelComponent;
  let fixture: ComponentFixture<AddCompanyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanyModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompanyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
