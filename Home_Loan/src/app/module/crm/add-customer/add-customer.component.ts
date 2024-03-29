import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  applicationform: FormGroup;
  step = 1;

  salaryslip: any;

  ngOnInit(): void {
    this.applicationform = this.fb.group({
      // applicationNumber: ['', Validators.required],
      applicantDetails: this.fb.group({
        customerId: [''],
        customerName: [''],
        customerMobileNumber: [''],
        customerEmailId: [''],
        adharNumber: [''],
        pancardNumber: [''],
        gender: [''],
        customerDOB: [''],
        age: [''],
        loanType: [''],
        maritalStatus: [''],
        statusCode: [''],
        totalLoanRequired: [''],
        cibilScore: [''],
      }),
      addressDetails: this.fb.group({
        customerAddressId: [''],

        permenantAddress: this.fb.group({
          permenantId: [''],
          houseNo: [''],
          areaName: [''],
          streetName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [''],
        }),

        localAddress: this.fb.group({
          localId: [''],
          houseNo: [''],
          areaName: [''],
          streetName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [''],
        }),
      }),
      guarantorDetails: this.fb.group({
        guarantorId: [''],
        guarantorName: [''],
        guarantorDOB: [''],
        guarantorRelationshipWithApplicant: [''],
        guarantorMobileNumber: [''],
        aadhaarcardNumber: [''],
        guarantorCityName: [''],
        guarantorJobDetails: [''],
        guarantorAreaName: [''],
      }),
      employmentDetails: this.fb.group({
        professionId: [''],
        companyName: [''],
        salary: [''],
        employeeWorkingPeriod: [''],
        professionDesignation: [''],
        salarySlip: [''],
      }),
      dependantDetails: this.fb.group({
        dependantId: [''],
        fatherName: [''],
        motherName: [''],
        maritalStatus: [''],
        numberOfChild: [''],
        familyIncome: [''],
        spouseName: [''],
        noOfFamilyMember: [''],
      }),
    });
  }

  next() {
    this.step++;
  }
  previous() {
    this.step--;
  }
  onSubmit() {
    this.applicationform.get;
    const formdata = this.applicationform.value;
    console.log(formdata);
  }

  onselectSalarySlip(event: any) {
    this.salaryslip = event.target.files[0];
  }
}
