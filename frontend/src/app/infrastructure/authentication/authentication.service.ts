import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthInfo} from "./auth-info";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authUrl = '';
  public redirectUrl = '';

  constructor(private router: Router,
              private httpClient: HttpClient) {
    this.authUrl = environment.authUrl;
  }

  public login(credenciales: any): Observable<AuthInfo> {
    return this.httpClient.post(this.authUrl + '/login', credenciales)
      .pipe(map(usuario => usuario as AuthInfo));
  }

  public isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public refreshToken(): Observable<any> {
    return this.httpClient.get(this.authUrl + '/refresh');
  }

  public logOut(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']);

  }
}
