import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDemo } from '../app/components/input-demo/input-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');
}
