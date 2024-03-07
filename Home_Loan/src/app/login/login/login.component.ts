import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private router:Router) { }

  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username:[],
        password:[],
      }
    )
  }
  onSubmit()
  {
    let un:string=this.loginForm.controls['username'].value;
    let ps:string=this.loginForm.controls['password'].value;

    if(un==='admin' && ps==='admin123')
    {
       alert('User is an admin')
       sessionStorage.setItem('userType','admin')
       this.router.navigateByUrl('userdash/admin')
    }
    else if(un==='crm' && ps==='crm123')
    {
      alert('User is an crm..!')
      sessionStorage.setItem('userType','crm')
      this.router.navigateByUrl('userdash/re')
    }
    else{
      alert("Enter valid authentication details...!")
    }
 
  }



}
