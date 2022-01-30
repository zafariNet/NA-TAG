import { SessionModel } from './session.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(token: string): Observable<SessionModel> {
    let api_sig = this.createSignature(token);
    return this.http
      .get(`http://ws.audioscrobbler.com/2.0/`, {
        params: {
          api_key: 'a3a01874af61b0eef3c99459f0c028ec',
          method: 'auth.getSession',
          token: token,
          api_sig: api_sig,
          format: 'json',
        },
      })
      .pipe(
        map((response) => {
          return response['session'] as SessionModel;
        })
      );
  }

  private createSignature(token: string) {
    debugger;
    let md5 = new Md5();
    md5.appendStr(
      `api_keya3a01874af61b0eef3c99459f0c028ecmethodauth.getSessiontoken${token}f3a2b839dcfe192575190fddf5fa3a2b`
    );
    return md5.end().toString();
  }
}
