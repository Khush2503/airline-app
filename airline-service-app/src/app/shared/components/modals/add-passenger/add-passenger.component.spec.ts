import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store } from '@ngrx/store';

import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      providers: [FormBuilder, Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher]
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
});
