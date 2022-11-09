import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderLayoutComponent} from "../../infrastructure/layout/header-layout/header-layout.component";
import { AccesoComponent } from './acceso/acceso.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HeaderLayoutComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'principal'
        },
        {
          path: 'principal',
          loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)
        }
      ]
    }
  ])],
  exports: [RouterModule],
  declarations: [
    AccesoComponent
  ]
})

export class PublicRoutingModule {
}