import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'custom-ui-library';

@Component({
  selector: 'app-input-demo',
  imports: [CommonModule, InputComponent,ReactiveFormsModule],
  templateUrl: './input-demo.html',
  styleUrl: './input-demo.scss',
})
export class InputDemo implements OnInit {

@ViewChild('inputRef') inputRef: any;
inputForm!: FormGroup;

placeholder = 'Enter Sample Text';
state: string = 'default';
states = ['default', 'active', 'selected', 'disabled', 'error'];

swIsDisable: boolean = false;
swReadOnlyProperties: boolean = false;
swIsShowIcon: boolean = true;
swIsShowLoader: boolean = false;
swIconClass: string = 'fa fa-search';
swAutocomplete: string = 'off';
locator: string = 'input-demo';
type: string = 'text';
maxLength: number = 20;
minLength: number = 2;
swDefaultValue: string = '';
inputClassName: string = 'default';
textOutput: string = '';
copyStatus: string = 'Copy to clipboard'; 

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.initForm();
  this.updateCode();
}

// Form Initialization
initForm() {
  this.inputForm = this.fb.group({
    inputText: ['', Validators.required]
  });
}

get f() {
  return this.inputForm.get('inputText');
}

// STATE CHANGE (MAIN LOGIC)
changeState(val: string) {
  this.state = val;
  const control = this.inputForm.get('inputText');

  // reset
  this.swIsDisable = false;
  this.swDefaultValue = '';
  this.inputClassName = val;
  control?.enable();

  if (val === 'active') {
    setTimeout(() => {
      this.inputRef?.myInput?.nativeElement.focus();
    });
  }

  else if (val === 'disabled') {
    this.swIsDisable = true;
    control?.disable();
  }

  else if (val === 'selected') {
    const value = 'Lorem Ipsum dolor sit amet';
    control?.setValue(value);
    this.swDefaultValue = value;
  }

  else if (val === 'error') {
    control?.setValue('');
    control?.markAsTouched();
    control?.markAsDirty();
  }

  else {
    this.inputForm.reset();
  }

  this.updateCode();
}

// EVENTS
onValueChange(val: string) {

}

onFocus(e: any) {}
onBlur(e: any) {}
onKeyUp(e: any) {}
onEnter(e: any) {}
onKeyPress(e: any) {}


// FULL COPY CODE (SWIRE LEVEL)
updateCode() {
  this.textOutput = `<lib-input
  formControlName="inputText"
  [swClass]="'${this.inputClassName}'"
  [swPlaceholder]="'${this.placeholder}'"
  [swDefaultValue]="'${this.swDefaultValue}'"
  [swIsDisable]="${this.swIsDisable}"
  [swReadOnlyProperties]="${this.swReadOnlyProperties}"
  [swType]="'${this.type}'"
  [maxLength]="${this.maxLength}"
  [minLength]="${this.minLength}"
  [swIsShowIcon]="${this.swIsShowIcon}"
  [swIconClass]="'${this.swIconClass}'"
  [swIsShowLoader]="${this.swIsShowLoader}"
  [swAutocomplete]="'${this.swAutocomplete}'"
  [locator]="'${this.locator}'"
  (valueChange)="onValueChange($event)"
></lib-input>`;
}

// COPY TO CLIPBOARD
copyCode() {
  navigator.clipboard.writeText(this.textOutput);
  this.copyStatus = 'Copied!';
  setTimeout(() => {
    this.copyStatus = 'Copy to clipboard';
  }, 2000);
}

}