import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;
  isAdmin = false;
  isStaff = false;

  /**
   * Creates an instance of header component.
   * @param localStorageService 
   * @param router 
   * @param location 
   */
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    location: PlatformLocation
  ) {
    location.onPopState(() => {
      alert('To continue with the application please LOG IN again!');
      this.localStorageService.clear('user');
      this.isAdmin = false;
      this.isStaff = false;
      this.router.navigate(['/pagenotfound']);
    });
  }

  /**
   * on init
   */
  ngOnInit(): void {
    this.name = this.localStorageService.retrieve('user').name;

    if (this.localStorageService.retrieve('user').username === 'Admin25') {
      this.isAdmin = true;
    }
    else {
      this.isStaff = true;
    }
  }

  /**
   * Logouts header component
   */
  logout() {
    this.localStorageService.clear('user');
    this.isAdmin = false;
    this.isStaff = false;
    this.router.navigate(['/']);
  }


}
