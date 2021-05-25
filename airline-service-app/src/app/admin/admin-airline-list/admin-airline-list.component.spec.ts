import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/core/services/service.service';

import { AdminAirlineListComponent } from './admin-airline-list.component';

describe('AdminAirlineListComponent', () => {
  let component: AdminAirlineListComponent;
  let fixture: ComponentFixture<AdminAirlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAirlineListComponent ],
      providers: [HttpClient, ServiceService, HttpHandler, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
