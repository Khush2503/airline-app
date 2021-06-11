import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { By } from 'protractor';
import { PassengerReducer } from 'src/app/core/store/reducers/passenger.reducer';
import { PASSENGER_STATE_NAME } from 'src/app/core/store/selectors/passenger.selector';

import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports: [ReactiveFormsModule,
        StoreModule.forFeature(PASSENGER_STATE_NAME, PassengerReducer),
        StoreModule.forRoot({}),
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
