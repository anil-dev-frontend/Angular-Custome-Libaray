import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';

@Component({
  selector: 'lib-input',
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  standalone: true,
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() state: string = 'default';
}
