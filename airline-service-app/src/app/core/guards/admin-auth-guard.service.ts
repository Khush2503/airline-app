import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.localStorageService.retrieve('user') !== null) {  //this.localStorageService.retrieve('user').role !== 'admin'
      return true;
    }
    alert("Unauthorised access");
    this.router.navigate(['/errorpage']);
    return false;
  }
}