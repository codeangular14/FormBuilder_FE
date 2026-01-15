import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'otp-input.component.html',
  styleUrls: ['otp-input.component.scss']
})
export class OtpInputComponent {

  @Output() otpCompleted = new EventEmitter<string>();
  otpLength = 5;
  otpFocus = 4;

  otpForm = new FormArray(
    Array.from({ length: this.otpLength }, () => new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d$/)
      ]))
  );

  get controls() {
    return this.otpForm.controls;
  }
 get isInvalid() {
    return this.otpForm.invalid && this.otpForm.touched;
  }

  onInput(event: any, index: number) {
    const value = event.target.value.replace(/\D/g, '');

    if (!value) {
      this.controls[index].setValue('');
      return;
    }


    this.controls[index].setValue(value[0]);
    this.controls[index].markAsTouched();

    if (index < this.otpFocus) {
      this.focus(index + 1);
    }

    this.emitIfComplete();
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.controls[index].value && index > 0) {
      this.focus(index - 1);
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, this.otpLength);

    if (!pasted) return;

    pasted.split('').forEach((digit, i) => {
      this.controls[i].setValue(digit);
    });

    this.emitIfComplete();
  }

  private focus(index: number) {
    const el = document.getElementById(`otp-${index}`);
    el?.focus();
  }

  private emitIfComplete() {
    if (this.otpForm.value.every(v => v)) {
      this.otpCompleted.emit(this.otpForm.value.join(''));
    }
  }
}
