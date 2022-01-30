import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import Artist from '../models/artist.model';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent {
  constructor(private router: Router) {}
  @ViewChild('modal', { static: true }) modal: ModalDirective;
  artists: Artist[];
  show(artists: Artist[]): void {
    this.artists = artists;
    this.modal.show();
  }
  close() {
    this.modal.hide();
  }
  goToArtistPage(artistName: string): void {
    this.modal.hide();
    this.router.navigate(['/artists', artistName, 'details']);
  }
}
