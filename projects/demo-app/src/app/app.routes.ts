import { Routes } from '@angular/router';
import { InputDemo } from './components/input-demo/input-demo';
import { ButtonDemo } from './components/button-demo/button-demo';

export const routes: Routes = [
  //   { path: '', redirectTo: 'input', pathMatch: 'full' },
  // { path: 'input', component: InputDemo }
  { path: 'input', component: InputDemo },
   { path: 'button', component: ButtonDemo },
];
