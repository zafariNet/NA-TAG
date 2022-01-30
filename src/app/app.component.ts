import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, dataFetched } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPage: boolean = false;
  constructor() {
    // dataFetched.subscribe((response) => {
    //   setTimeout(() => {
    //     this.showPage = response;
    //   }, 0);
    // });
  }
}
