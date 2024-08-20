import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export interface Country {
  id: string;
  name: string | null;
  updating: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'http://localhost:4000/countries';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  public postCountry(newCountry: any): Observable<Country> {
    const id = new Date().getTime().toString();
    const data: Country = { id: id, name: newCountry, updating: false };
    return this.http.post<Country>(this.apiUrl, data, this.httpOptions);
  }

  public deleteCountry(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  public updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${country.id}`, country);
  }
}
