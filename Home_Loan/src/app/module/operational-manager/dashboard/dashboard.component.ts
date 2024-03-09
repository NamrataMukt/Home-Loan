import { Component } from '@angular/core';
import { Ussermenus } from '../../../model/ussermenus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userOptions = Ussermenus.menus[0].opm;

  ngOnInit(): void {
    // Initialize userOptions array with shortcut options for the menu
    this.userOptions = [
      { label: 'Applicants', link: '/applicants' },
      { label: 'Approved Customers', link: '/approved-customer' },
      { label: 'Verification Required', link: '/verification-required' }
    ];
  }

}
