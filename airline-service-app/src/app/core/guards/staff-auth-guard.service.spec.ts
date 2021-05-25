import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { StaffAuthGuardService } from './staff-auth-guard.service';

describe('StaffAuthGuardService', () => {
  let service: StaffAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService, Router, Function]
    });
    service = TestBed.inject(StaffAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
