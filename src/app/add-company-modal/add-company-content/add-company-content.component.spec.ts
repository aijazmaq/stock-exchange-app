import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyContentComponent } from './add-company-content.component';

describe('AddCompanyContentComponent', () => {
  let component: AddCompanyContentComponent;
  let fixture: ComponentFixture<AddCompanyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanyContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompanyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
