import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControlComponent } from '../form-control/form-control.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OtpInputComponent } from '../form-control/otp-input.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    FormControlComponent,
    OtpInputComponent,
    ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  formGroup!: FormGroup;
  isOtpValid = false;


  stepIn() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }

  initializeFormControls() {
    this.formGroup = new FormGroup({
      userId: new FormControl('', Validators.required),
    });
  }

  verifyOtp(otp: string) {
    this.isOtpValid = true;

    console.log('Entered OTP:', otp);
  }

  ngOnInit(): void {
    this.initializeFormControls();
  }

}
