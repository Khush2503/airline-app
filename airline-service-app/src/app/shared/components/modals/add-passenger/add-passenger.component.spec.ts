import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.createForm.valid).toBeFalsy();
  });

  it('CHECK INITIAL FORM VALUES FOR LOGIN FORM GROUP', () => {
    const createFormGroup = component.createForm;
    const loginFormValues = {
      firstname: null,
      lastname: null,
      passport_number: null,
      birth_date: null,
      address: null,
      flight_id: null,
      seat_number: null,
      checked_in: null,
      infants: null,
      wheel_chair: null,
      ancillary_services: null
    };
    expect(createFormGroup.value).toEqual(loginFormValues);
  });


});
