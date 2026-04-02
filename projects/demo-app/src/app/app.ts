import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDemo } from '../app/components/input-demo/input-demo';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { Header } from './components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputDemo,Sidebar,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-Libarary');
}
