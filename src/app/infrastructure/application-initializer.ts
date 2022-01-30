import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

declare let $: any;
export function applicationInitializer(
  router: ActivatedRoute,
  http: HttpClient,
  tokenService: TokenService,
  authService: AuthService
) {
  return () => {
    let params = new URL(window.location.href).searchParams;
    let token = params.get('token') ?? '';
    if (!tokenService.getToken() && !token) {
      window.location.href =
        'http://www.last.fm/api/auth/?api_key=a3a01874af61b0eef3c99459f0c028ec&cb=http://localhost:4200';
    }
    // authService.authenticate(token).subscribe({
    //   next: (response) => {
    //     tokenService.setToken(response.key.toString());
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete'),
    // });
  };
}
