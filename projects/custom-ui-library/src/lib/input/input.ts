import { CommonModule } from '@angular/common';
import { Component,ElementRef,EventEmitter,Input, Optional, Output, Self, ViewChild  } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  standalone: true,
})
export class InputComponent {
  constructor(
    @Self() @Optional() private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @ViewChild('myInput') myInput!: ElementRef;

  // =========================
  // 🔹 INPUT PROPERTIES
  // =========================

  // UI
  @Input() swClass: string = '';
  @Input() swIconClass: string = '';
  @Input() swWrapperClass: string = '';

  // Behavior
  @Input() swType: string = 'text';
  @Input() swPlaceholder: string = '';
  @Input() swDefaultValue: any = '';

  // State
  @Input() swIsDisable: boolean = false;
  @Input() swReadOnlyProperties: boolean = false;

  // Validation
  @Input() maxLength: number | null = null;
  @Input() minLength: number | null = null;

  // Extra Features
  @Input() swIsShowIcon: boolean = false;
  @Input() swIsShowLoader: boolean = false;
  @Input() swAutocomplete: any = 'off';
  @Input() locator: any = '';

  // =========================
  // 🔹 OUTPUT EVENTS
  // =========================

  @Output() keyupEvent = new EventEmitter<any>();
  @Output() keypressEvent = new EventEmitter<any>();
  @Output() blurEvent = new EventEmitter<any>();
  @Output() focusEvent = new EventEmitter<any>();
  @Output() enterEvent = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();
  @Output() iconClick = new EventEmitter<boolean>();

  // =========================
  // 🔹 INTERNAL STATE
  // =========================

  value: any = '';
  touched = false;

  // =========================
  // 🔹 CONTROL VALUE ACCESSOR
  // =========================

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(val: any): void {
    this.value = val || this.swDefaultValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.swIsDisable = isDisabled;
  }

  // =========================
  // 🔹 EVENT HANDLERS
  // =========================

  handleInput(event: any) {
    const val = event.target.value;

    this.value = val;
    this.onChange(val);              // Angular form update
    this.valueChange.emit(val);      // Custom emit
  }

  handleBlur(event: any) {
    this.onTouched();
    this.blurEvent.emit(event);
  }

  onFocus(event: any) {
    this.focusEvent.emit(event);
  }

  onKeyUp(event: any) {
    this.keyupEvent.emit(event);
  }

  onKeyPress(event: any) {
    this.keypressEvent.emit(event);
  }

  onEnter(event: any) {
    this.enterEvent.emit(event);
  }

  onIconClick() {
    this.iconClick.emit(true);
  }
}