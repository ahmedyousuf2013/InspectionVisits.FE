import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  //{ path: '/user-profile', title: 'User Profile', icon: 'content_paste', class: '' },
  //{ path: '/table-list', title: 'table-list', icon: 'person', class: '' },
  { path: '/entity-toinspect', title: 'Entity To Inspect', icon: 'content_paste', class: '' },
  { path: '/inspectors', title: 'Inspectors', icon: 'content_paste', class: '' },
  //{ path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  { path: '/insepection-visits', title: 'Insepection Visit', icon: 'library_books', class: '' },
  //{ path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  //{ path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  //{ path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  //{ path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Logged out successfully', 'Success');
    this.router.navigate(['/login']);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
