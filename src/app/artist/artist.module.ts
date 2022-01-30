import { CompresionComponent } from './comparison/compresion.component';
import { SearchResultComponent } from './search/search-result.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { Component, NgModule } from '@angular/core';
import ArtistService from './services/artist.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ArtistListComponent, ArtistItemComponent,CompresionComponent],
  providers: [ArtistService, BsModalService],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
  ],
  exports: [],
})
export class ArtistModule {}
