import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../infrastructure/authentication/authentication.service";

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {
  public loginForm = {} as FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.buildForm();
  }

  public ngOnInit(): void {

  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: null,
      password: null
    });
  }

  public login() {
    this.authenticationService.login(this.loginForm.value).subscribe({
      next: (authInfo) => {
        console.log(authInfo);
      }
    });
  }
}
