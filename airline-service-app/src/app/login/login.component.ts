import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../core/models/user';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  toggleValue: boolean;
  loginForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [null],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]],
    });

  }

  onSubmit() {

    if ( this.loginForm.value.role === 'Admin' )
    {
      if ( this.loginForm.value.username === 'Admin25' && this.loginForm.value.password === 'Admin@2503' ) {
        this.setStorageData();
        this.router.navigate(['/admin']);
      }
      else {
        alert('Invalid Credentials!');
      }
    }
    else{
      if (this.loginForm.value.username === 'Staff03' && this.loginForm.value.password === 'Staff@2503') {
        this.setStorageData();
        this.router.navigate(['/homepage']);
      }
      else {
        alert('Invalid Credentials!');
      }
    }
  }

  setStorageData()
  {
    this.localStorageService.store('user', this.loginForm.value);
  }

}
