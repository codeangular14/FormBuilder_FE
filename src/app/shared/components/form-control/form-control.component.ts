import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {

  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) controlName!: string;
  @Input() inputId = '';
  @Input() options: Array<Record<string, any>> = [];
  @Input() valueKey = 'id';
  @Input() labelKey = 'name';
  @Input() placeholder = 'Select';
  @Input() readonly = false;
  @Input() isLabel: boolean = true;
  @Input() label: string = '';
  @Input() isRequired: boolean = false;
   @Input() inputType: 'text' | 'select' | 'date' = 'text';
  // @Input() requiredMessage = 'This field is required';
  errorMessage: Record<string, string> = {
    required: 'The field is required',
    email: 'Email is invalid',
    minlength: `The field must be at least `,
    pattern: `Mobile number must be 10 digits.`
  }

   get control() {
    return this.formGroup.get(this.controlName);
  }
  constructor() {

  }


  ngOnInit(): void {
  }


}
