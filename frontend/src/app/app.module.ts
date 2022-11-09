import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PublicRoutingModule} from "./domain/public/public.routing.module";
import {HeaderLayoutComponent} from './infrastructure/layout/header-layout/header-layout.component';
import {MenuComponent} from './infrastructure/layout/header-layout/menu/menu.component';
import {FooterComponent} from './infrastructure/layout/header-layout/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptorService} from "./infrastructure/authentication/jwt-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PublicRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
