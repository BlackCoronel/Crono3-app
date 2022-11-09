import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
