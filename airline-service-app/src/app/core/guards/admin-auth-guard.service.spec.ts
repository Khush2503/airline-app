import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { AdminAuthGuardService } from './admin-auth-guard.service';

describe('AdminAuthGuardService', () => {
  let service: AdminAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService, Router, Function]
    });
    service = TestBed.inject(AdminAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
