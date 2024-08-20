import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: ':id', component: CountryComponent },
];
