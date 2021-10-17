import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { UsernameValidator } from '../validators/username-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public addressFeilds;
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
  title: string = 'Register';
  registerForm: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      userName: [
        '',
        [Validators.required, UsernameValidator.cannotContainSpace],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confPassword: ['', Validators.required, Validators.minLength(8)],
      address: this.fb.array([]),
    });
  }
  addAddress() {
    const address = this.registerForm.controls['address'] as FormArray;
    address.push(
      this.fb.group({
        address: [''],
        street: [''],
        countery: [''],
        city: [''],
      })
    );
  }
  submitReg() {
    alert(this.registerForm.value);
  }
}
