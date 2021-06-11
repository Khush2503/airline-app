import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'ngx-webstorage';
import { AdminAuthGuardService } from './admin-auth-guard.service';

describe('AdminAuthGuardService', () => {
  let service: AdminAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LocalStorageService]
    });
    service = TestBed.inject(AdminAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('navigates to admin', () => {
    it('should navigate', inject([Router], (router: Router) => {
      spyOn(router, 'navigate').and.stub();
      expect(service.canActivate()).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith(['/admin']);
    }));
  });
});
