import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }
  onSubmit() {
    let un: string = this.loginForm.controls['username'].value;
    let ps: string = this.loginForm.controls['password'].value;

    if (un === 'admin' && ps === 'admin123') {
      alert('User is an admin');
      sessionStorage.setItem('userType', 'admin');
      this.router.navigateByUrl('userdash/admin');
    } else if (un === 'crm' && ps === 'crm123') {
      alert('User is an crm..!');
      sessionStorage.setItem('userType', 'crm');
      this.router.navigateByUrl('userdash/crm');
    } else {
      alert('Enter valid authentication details...!');
    }
<<<<<<< HEAD
=======
    else if(un==='crm' && ps==='crm123')
    {
      alert('User is an crm..!')
      sessionStorage.setItem('userType','crm')
      this.router.navigateByUrl('userdash/crm')
    }
    else if(un==='opm' && ps==='opm123')
    {
      alert('User is an opm..!')
      sessionStorage.setItem('userType','opm')
      this.router.navigateByUrl('userdash/opm')
    }

    else{
      alert("Enter valid authentication details...!")
    }
 
>>>>>>> b531b668b3bd44837460ad6f2f831ba59f812945
  }
}
