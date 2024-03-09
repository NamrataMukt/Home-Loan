import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ussermenus } from '../../model/ussermenus';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  

  userOptions:Array<any>;
  type:string;
  ngOnInit(): void {
    this.userOptions = Ussermenus.menus;
    this.type = sessionStorage.getItem('userType');
  }

  navigateTo(link:string)
  {
 
    this.router.navigateByUrl('/userdash/'+this.type+"/"+link)
  }

}
