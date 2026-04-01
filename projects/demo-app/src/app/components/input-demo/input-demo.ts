import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../../../../../custom-ui-library/src/lib/input/input';

@Component({
  selector: 'app-input-demo',
  imports: [CommonModule, InputComponent],
  templateUrl: './input-demo.html',
  styleUrl: './input-demo.scss',
})
export class InputDemo {

placeholder = 'Enter Sample Text';

  state = 'default';

  states = ['default', 'active', 'selected', 'disabled', 'error'];

  code = '';

  ngOnInit() {
    this.updateCode();
  }

  changeState(s: string) {
    this.state = s;
    this.updateCode();
  }

  updateCode() {
    this.code = `<lib-input
  [placeholder]="'${this.placeholder}'"
  [disabled]="${this.state === 'disabled'}"
  [state]="'${this.state}'">
</lib-input>`;
  }

  copyCode() {
    navigator.clipboard.writeText(this.code);
    alert('Copied!');
  }

}


