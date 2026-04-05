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

placeholder = 'Enter Sample Text';
state: string = 'default';
states = ['default', 'active', 'selected', 'disabled', 'error'];

inputForm!: FormGroup;

currentValue: string = '';

// 🔥 ALL PROPERTIES (SWIRE STYLE)
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

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.initForm();
  this.updateCode();
}

// FORM
initForm() {
  this.inputForm = this.fb.group({
    inputText: ['', Validators.required]
  });
}

get inputTextControl() {
  return this.inputForm.get('inputText');
}

// 🔥 STATE CHANGE (MAIN LOGIC)
changeState(s: string) {
  this.state = s;

  const control = this.inputForm.get('inputText');

  // reset
  this.swIsDisable = false;
  this.swDefaultValue = '';
  this.inputClassName = s;
  control?.enable();
  this.currentValue = '';

  if (s === 'active') {
    setTimeout(() => {
      this.inputRef?.myInput?.nativeElement.focus();
    });
  }

  else if (s === 'disabled') {
    this.swIsDisable = true;
    control?.disable();
  }

  else if (s === 'selected') {
    const value = 'Lorem Ipsum dolor sit amet';
    control?.setValue(value);
    this.swDefaultValue = value;
    this.currentValue = value;
  }

  else if (s === 'error') {
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
  this.currentValue = val;
}

onFocus(e: any) {}
onBlur(e: any) {}
onKeyUp(e: any) {}
onEnter(e: any) {}
onKeyPress(e: any) {}


// 🔥 FULL COPY CODE (SWIRE LEVEL)
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

// COPY
copyCode() {
  navigator.clipboard.writeText(this.textOutput);

  const msg = document.createElement('div');
  msg.innerText = 'Copied!';
  msg.className = 'copy-toast';

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 1500);
}
}