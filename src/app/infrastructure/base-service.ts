import { ServiceNames } from './../artist/services/artist-base-data';
import { Injector } from '@angular/core';
import { API_BASE_URL, API_KEY } from '../app.module';

export class BaseService {
  private baseUrl: string;
  private apiKey: string;
  constructor(injector: Injector) {
    this.baseUrl = injector.get(API_BASE_URL);
    this.apiKey = injector.get(API_KEY);
  }
  createAddress(method: ServiceNames, param: string): string {
    let address = `${this.baseUrl}?method=${method}&${param}&api_key=${this.apiKey}&format=json`;
    return address;
  }
  createAddressWithPagination(
    method: ServiceNames,
    param: string,
    limit = 10,
    page = 1
  ): string {
    let address = `${this.baseUrl}?method=${method}&limit=${limit}&page=${page}&${param}&api_key=${this.apiKey}&format=json`;
    return address;
  }
}
