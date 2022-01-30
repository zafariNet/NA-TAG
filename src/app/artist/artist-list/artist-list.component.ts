import { dataFetched } from './../../app.module';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { API_BASE_URL } from 'src/app/app.module';
import Artist from '../models/artist.model';
import ArtistService from '../services/artist.service';

@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html',
})
export class ArtistListComponent {
  artists: Artist[] = [];
  loading: boolean = false;
  counties: string[] = ['France', 'Germany', 'United States'];
  selectedCountry: string = 'Germany';
  constructor(
    private artistService: ArtistService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.countryChanghandler();
  }

  countryChanghandler() {
    this.spinner.show();
    this.artistService
      .getArtistsByCountry(this.selectedCountry)
      .subscribe((response) => {
        setTimeout(() => {
          this.artists = response;
          this.spinner.hide();
        }, 500);
      });
  }
}
