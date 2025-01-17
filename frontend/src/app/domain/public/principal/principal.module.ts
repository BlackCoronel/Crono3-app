import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrincipalComponent} from './principal.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrincipalComponent
      }
    ])
  ]
})
export class PrincipalModule {
}
