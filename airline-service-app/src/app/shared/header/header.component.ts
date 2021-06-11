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

<<<<<<< HEAD
  name: String;
=======
  name: string;
>>>>>>> 5e7476b6db76d79bb564d42a62e194e11f944dd3
  isAdmin = false;
  isStaff = false;
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

  ngOnInit(): void {
    this.name = this.localStorageService.retrieve('user').name;

    if (this.localStorageService.retrieve('user').username === 'Admin25') {
      this.isAdmin = true;
    }
    else {
      this.isStaff = true;
    }
  }

  logout() {
    this.localStorageService.clear('user');
    this.isAdmin = false;
    this.isStaff = false;
    this.router.navigate(['/login']);
  }


}
