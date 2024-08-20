import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CountriesService, Country } from '../countries.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent {
  constructor(public CountriesService: CountriesService) {}

  newCountry = new FormControl('');

  @Input() countries: Country[] = [];
  @Output() countryChange = new EventEmitter<Country>();
  @Output() countryDelete = new EventEmitter<string>();

  public deleteCountry(id: string): void {
    this.countryDelete.emit(id);
  }

  public confirmDelete(id: string) {
    if (confirm('Удалить')) {
      this.deleteCountry(id);
    }
  }

  public editCountry(country: Country) {
    country.updating = true;
    this.newCountry.setValue(country.name);
  }

  public updateCountry(country: Country) {
    if (!this.newCountry.value) return;
    country.name = this.newCountry.value;
    country.updating = false;
    this.countryChange.emit(country);
  }
}
