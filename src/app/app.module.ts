import { LayoutModule } from './layout/layout.module';
import { TokenService } from './infrastructure/token.service';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { applicationInitializer } from './infrastructure/application-initializer';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './infrastructure/auth.service';
import { ArtistModule } from './artist/artist.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { HttpConfigInterceptor } from './infrastructure/http-interseptor';
import { FormsModule } from '@angular/forms';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const API_KEY = new InjectionToken<string>('API_KEY');
export let dataFetched = new Subject<boolean>();
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArtistModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxSpinnerModule,
    FormsModule,
  ],

  providers: [
    TokenService,
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializer,
      multi: true,
      deps: [ActivatedRoute, HttpClient, TokenService, AuthService],
    },
    { provide: API_BASE_URL, useValue: 'http://ws.audioscrobbler.com/2.0/' },
    { provide: API_KEY, useValue: 'a3a01874af61b0eef3c99459f0c028ec' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
