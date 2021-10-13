import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';
import { UsernameValidator } from '../validators/username-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public addressFeilds: FormArray;
  constructor(private fb: FormBuilder) {}
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confPassword() {
    return this.registerForm.get('confPassword');
  }
  get userAddress() {
    return this.registerForm.get('userAddress') as FormArray;
  }
  // addUserAddress() {
  //   this.userAddress.push(this.fb.control(''));
  // }
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    userName: ['', [Validators.required, UsernameValidator.cannotContainSpace]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
        ),
      ],
    ],
    confPassword: ['', Validators.required, Validators.minLength(8)],
    //   userAddress: this.fb.array([
    //     {
    //       address: '',
    //       street: '',
    //       country: '',
    //       city: '',
    //     },
    //   ]),
  });
  title: string = 'Register';
  ngOnInit(): void {
    this.addressFeilds = new FormArray([
      new FormGroup({
        address: new FormControl(''),
        street: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
      }),
    ]);
  }
  handleReg() {
    console.log(this.registerForm.value);
  }
}
