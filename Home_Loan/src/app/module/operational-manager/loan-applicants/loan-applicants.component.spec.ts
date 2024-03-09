import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicantsComponent } from './loan-applicants.component';

describe('LoanApplicantsComponent', () => {
  let component: LoanApplicantsComponent;
  let fixture: ComponentFixture<LoanApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanApplicantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
