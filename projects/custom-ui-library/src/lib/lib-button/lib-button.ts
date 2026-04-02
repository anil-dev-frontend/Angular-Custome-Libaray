import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './lib-button.html',
  styleUrl: './lib-button.css',
})
export class LibButton {

 @Input() label = 'Button';
  @Input() color = 'red';
  @Input() size = 'large';
  @Input() state = 'default';
  @Input() iconPosition = 'none'; // left, right, none
  @Input() icon = '';

  get classes() {
    return `
      lib-btn
      lib-${this.color}
      lib-${this.size}
      lib-${this.state}
      icon-${this.iconPosition}
    `;
  }

  get codeSnippet() {
    return `<lib-button 
  label="${this.label}"
  color="${this.color}"
  size="${this.size}"
  state="${this.state}"
  iconPosition="${this.iconPosition}"
  icon="${this.icon}">
</lib-button>`;
  }
}