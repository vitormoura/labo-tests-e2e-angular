import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  findCountriesByName(searchTerm: string): Observable<CountryInfo[]> {
    return this.http.get<CountryInfo[]>(
      `https://restcountries.eu/rest/v2/name/${searchTerm}`
    );
  }
}

export interface CountryInfo {
  name: string;
  capital: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  subregion: string;
  population: number;
}
