import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { flatMap, switchMap, tap } from 'rxjs';
import Artist from '../models/artist.model';
import ArtistService from '../services/artist.service';

@Component({
  selector: 'artist-item',
  templateUrl: './artist-item.component.html',
})
export class ArtistItemComponent implements OnInit {
  artistName: string = '';
  artist: Artist;
  constructor(
    private activateRoute: ActivatedRoute,
    private artistService: ArtistService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        tap((u) => {
          this.artistName = u['name'];
          this.spinner.show();
        }),
        switchMap((u) => this.artistService.getArtist(this.artistName))
      )
      .subscribe((params) => {
        this.artist = params;
        this.spinner.hide();
      });
  }
}
