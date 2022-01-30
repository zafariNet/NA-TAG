import { BrowserModule } from '@angular/platform-browser';
import { SearchResultComponent } from './../artist/search/search-result.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [RouterModule, ModalModule.forRoot(), BrowserModule],
  exports: [LayoutComponent, HeaderComponent],
  declarations: [LayoutComponent, HeaderComponent, SearchResultComponent],
})
export class LayoutModule {}
