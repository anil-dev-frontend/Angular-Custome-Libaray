import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LibButton} from 'custom-ui-library';
import { CopyButton } from 'custom-ui-library';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, LibButton,CopyButton],
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.scss'],
})
export class ButtonDemo {
color = 'red';
  size = 'large';
  state = 'default';
  iconPosition = 'none';
  icon = 'fa-solid fa-user';

  code: string = '';

  ngOnInit() {
    this.updateCode();
  }

  // 🔥 change handlers
  changeColor(c: string) {
    this.color = c;
    this.updateCode();
  }

  changeSize(s: string) {
    this.size = s;
    this.updateCode();
  }

  changeState(s: string) {
    this.state = s;
    this.updateCode();
  }

  changeIconPosition(pos: string) {
    this.iconPosition = pos;
    this.updateCode();
  }

  // 🔥 MAIN CODE GENERATOR
  updateCode() {
    this.code = `<lib-button
  label="Button"
  color="${this.color}"
  size="${this.size}"
  state="${this.state}"
  iconPosition="${this.iconPosition}"
  icon="${this.icon}">
</lib-button>`;
  }

  // 🔥 COPY FUNCTION
  copyCode() {
    navigator.clipboard.writeText(this.code);
   
  }
}
