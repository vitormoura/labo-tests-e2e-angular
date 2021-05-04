import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CountriesService,
  CountryInfo,
} from 'src/app/services/countries.service';

@Component({
  selector: 'app-page002',
  templateUrl: './page002.component.html',
  styleUrls: ['./page002.component.scss'],
})
export class Page002Component implements OnInit {
  formGroup = {} as FormGroup;
  searchResults = [] as CountryInfo[];
  
  get searchField() {
    return this.formGroup.controls['search'] as FormControl;
  }

  constructor(private fb: FormBuilder, private countries: CountriesService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      search: ['', Validators.required],
    });
  }

  onSearchCountry() {
    if (this.searchField.invalid) {
      return;
    }

    this.countries
      .findCountriesByName(this.searchField.value)
      .subscribe((results) => (this.searchResults = results));
  }
}
