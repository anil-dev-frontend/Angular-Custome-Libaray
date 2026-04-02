import { Routes } from '@angular/router';
import { InputDemo } from './components/input-demo/input-demo';

export const routes: Routes = [
    { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: InputDemo }
];
