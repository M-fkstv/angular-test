import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CountriesService, Country } from '../countries.service';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    CountryComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form: FormGroup;
  constructor(
    private CountriesService: CountriesService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(2),
      ]),
    });
  }

  public countries: Country[] = [];

  ngOnInit() {
    this.getCountries();
  }

  public getCountries() {
    this.CountriesService.getCountries().subscribe(
      countries => (this.countries = countries),
    );
  }

  public postCountry() {
    if (this.form.invalid) return;
    this.CountriesService.postCountry(this.form.value.name).subscribe(() =>
      this.getCountries(),
    );
    return this.form.setValue({ name: '' });
  }

  public deleteCountry(id: string) {
    this.CountriesService.deleteCountry(id).subscribe(() =>
      this.getCountries(),
    );
  }

  countryChange(country: Country) {
    this.CountriesService.updateCountry(country).subscribe(() =>
      this.getCountries(),
    );
  }
}
