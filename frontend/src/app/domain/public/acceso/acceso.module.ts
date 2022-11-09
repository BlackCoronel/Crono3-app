import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccesoComponent} from "./acceso.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AccesoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccesoComponent
      }
    ]),
    ReactiveFormsModule
  ]
})
export class AccesoModule {
}
