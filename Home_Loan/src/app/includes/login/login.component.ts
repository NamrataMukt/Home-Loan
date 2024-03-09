import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{
  constructor(private fb:FormBuilder,private router:Router){}
  loginform:FormGroup

  ngOnInit(): void
   {
  this.loginform=this.fb.group(
    {
      username:[],
      password:[]
    }
  )
  }
 
  onSubmit()
  {
    let un:string=this.loginform.controls['username'].value;
    let pass:string=this.loginform.controls['password'].value;
    if(un ==='admin' && pass ==='admin123')
    {
        alert('Admin Login...')
        this.router.navigateByUrl('/userdash/admin')
    }
    else if(un === 'abc' && pass ==='abc123')
    {
        alert('Abc Login....')
        this.router.navigateByUrl('/userdash/abc')
    }
    else
    {
      alert('Enter Valid username and password')
    }
  }

  onReset()
  {
    window.location.reload()
  }
}
