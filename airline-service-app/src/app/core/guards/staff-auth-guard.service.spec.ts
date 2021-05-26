import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'ngx-webstorage';

import { StaffAuthGuardService } from './staff-auth-guard.service';

describe('StaffAuthGuardService', () => {
  let service: StaffAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LocalStorageService]
    });
    service = TestBed.inject(StaffAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide guard to Staff dashboard',
    inject([StaffAuthGuardService], (guard: StaffAuthGuardService) => {
      expect(guard).toBeTruthy();
  }));

  describe('navigates to homepage', () => {
    it('should navigate', inject([Router], (router: Router) => {
      spyOn(router, 'navigate').and.stub();
      expect(service.canActivate()).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith(['/homepage']);
    }));
  });
});
