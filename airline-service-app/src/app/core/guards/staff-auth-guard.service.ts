import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StaffAuthGuardService implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  /**
   * Determines whether activate can
   * @returns true if activate 
   */
  canActivate(): boolean {
    if (this.localStorageService.retrieve('user') !== null) {  // this.localStorageService.retrieve('user').role !== 'staff'
      return true;
    }
    alert('Unauthorised access');
    this.router.navigate(['/errorpage']);
    return false;
  }

}
