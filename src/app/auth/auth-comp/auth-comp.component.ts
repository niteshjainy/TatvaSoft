import { ToasterService } from './../../shared/services/toaster.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { TokenManager } from 'src/app/shared/services/token-manager.service';
import { Title } from '@angular/platform-browser';
import { notification_msg } from 'src/app/shared/constants/consts';
import { Subscription } from 'rxjs';

// tslint:disable-next-line:class-name
export interface loginFormFields {
  username: any;
  password: any;
}

@Component({
  selector: 'app-auth-comp',
  templateUrl: './auth-comp.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  loading: boolean;
  loginModel: loginFormFields = {
    username: '',
    password: ''
  };
  frm: FormGroup;
  isLoggedIn: boolean;
  submitSubscription: Subscription;


  constructor(
    private router: Router,
    private auth: AuthService,
    private tokenManager: TokenManager,
    private toasterService: ToasterService,
    private titleService: Title,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Demo | Admin');
    document.getElementsByTagName('body')[0].classList.add('loginpage');
    this.tokenManager.deleteToken();
    this.createform();
  }

  createform() {
    this.frm = this.fb.group({
      username: [
        this.loginModel.username,
        Validators.compose([
          Validators.required,
          Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
        ])
      ],
      password: [
        this.loginModel.password,
        Validators.compose([Validators.required])
      ]
    });
  }

  login() {
    if (this.frm.valid) {
      this.loading = true;
      if (this.submitSubscription) {
          this.submitSubscription.unsubscribe();
      }
      this.submitSubscription =  this.auth
        .loginUser(this.frm.value.username, this.frm.value.password)
        .subscribe({
          next: response => {
            if (response.success) {
              console.log("ssssssssss",response)
              this.submitSubscription.unsubscribe();
              this.toasterService.Success('Login Successful');
              this.router.navigate(['/admin/dashboard']);
              this.loading = false;
            } else {
              this.toasterService.Error('Invalid email or password');
              this.loading = false;
            }
          },
          error: err => {
            this.loading = false;
            switch (err.status) {
              case 400:
                this.toasterService.Error('Invalid email or password');
                break;

              case 503:
                this.toasterService.Error('Service Unavailable');
                break;

              default:
                this.toasterService.Error('Please try again');
                break;
            }
          }
        });
    } else {
      // if form is not valid
      this.loading = false;
      this.frm.markAsDirty({ onlySelf: true });
      this.frm.markAsTouched({ onlySelf: true });

      Object.keys(this.frm.controls).forEach(field => {
        const control = this.frm.get(field);
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      });
      this.toasterService.Error(notification_msg.FILL_ALL_DETAILS);
    }
  }

  ngOnDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('loginpage');
  }

  get username() {
    return this.frm.get('username');
  }
  get password() {
    return this.frm.get('password');
  }
}
