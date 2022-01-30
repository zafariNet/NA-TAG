import { ServiceNames } from './artist-base-data';
import { Injector } from '@angular/core';
import { BaseService } from './../../infrastructure/base-service';
import { map, Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Artist from '../models/artist.model';

@Injectable({
  providedIn: 'root',
})
export default class ArtistService extends BaseService {
  constructor(injector: Injector, private http: HttpClient) {
    super(injector);
  }

  getArtistsByCountry(
    country: string,
    limit = 10,
    page = 1
  ): Observable<Artist[]> {
    let address = this.createAddressWithPagination(
      ServiceNames.getTopArtists,
      `country=${country}`,
      limit,
      page
    );
    return this.http.get<Artist[]>(address).pipe(
      retry(1),
      map((response) => {
        return response['topartists']['artist'] as Artist[];
      })
    );
  }
  getArtist(name: string): Observable<Artist> {
    let address = this.createAddress(
      ServiceNames.getArtistInfo,
      `artist=${this.createSearchQuery(name)}`
    );
    return this.http.get<Artist>(address).pipe(
      retry(1),
      map((response) => {
        return response['artist'] as Artist;
      })
    );
  }

  searchArtist(name: string): Observable<Artist[]> {
    let address = this.createAddress(
      ServiceNames.artistSearch,
      `artist=${this.createSearchQuery(name)}`
    );
    return this.http.get<Artist[]>(address).pipe(
      retry(1),
      map((response) => {
        return response['results']['artistmatches']['artist'] as Artist[];
      })
    );
  }
  private createSearchQuery(searchText: string): string {
    let queryArray = searchText.replace(' ', '+');
    return queryArray;
  }
}
