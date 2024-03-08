import { Component } from '@angular/core';

interface EmiDetails {
  month: number;
  beginningBalance: number;
  emi: number;
  principle: number;
  interest: number;
  outstandingBalance: number;
}

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emiAmount: number;
  emiDetails: EmiDetails[] = [];

  constructor() { }

  calculateEMI() {
    const monthlyInterestRate = (this.interestRate / 100) / 12;
    const numberOfPayments = this.loanTenure;
    const principal = this.loanAmount;

    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    this.emiAmount = emi;
    this.calculateEmiDetails(principal, monthlyInterestRate, numberOfPayments);
  }

  calculateEmiDetails(principal: number, monthlyInterestRate: number, numberOfPayments: number) {
    let balance = principal;
    for (let month = 1; month <= numberOfPayments; month++) {
      const interest = balance * monthlyInterestRate;
      const principle = this.emiAmount - interest;
      balance = balance - principle;

      const emiDetail: EmiDetails = {
        month,
        beginningBalance: balance + principle,
        emi: this.emiAmount,
        principle,
        interest,
        outstandingBalance: balance
      };

      this.emiDetails.push(emiDetail);
    }
  }
}
