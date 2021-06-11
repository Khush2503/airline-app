import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule ],
      providers: [LocalStorageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = component.loginForm.controls.username;
    expect(email.valid).toBeFalsy();
  });

  it('CHECK INITIAL FORM VALUES FOR LOGIN FORM GROUP', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      name: null,
      username: null,
      password: null,
      role: null
    };
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  it('should call admin navigation if role is Admin', () => {
    const spy =  spyOn(component, 'setStorageData');
    component.loginForm.value.role = 'Admin';
    component.loginForm.value.username = 'Admin25';
    component.loginForm.value.password = 'Admin@2503';
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should give alert if admin credential is wrong', () => {
    const spy = spyOn(window, 'alert');
    component.loginForm.value.role = 'Admin';
    component.loginForm.value.username = 'Admin25';
    component.loginForm.value.password = 'Admin@25';
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call staff navigation if role is Staff', () => {
    const spy =  spyOn(component, 'setStorageData');
    component.loginForm.value.role = 'Staff';
    component.loginForm.value.username = 'Staff03';
    component.loginForm.value.password = 'Staff@2503';
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should give alert if staff credential is wrong', () => {
    const spy = spyOn(window, 'alert');
    component.loginForm.value.role = 'Staff';
    component.loginForm.value.username = 'Staff';
    component.loginForm.value.password = 'Staff@25';
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });


});
