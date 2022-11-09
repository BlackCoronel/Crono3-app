import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PublicRoutingModule} from "./domain/public/public.routing.module";
import { HeaderLayoutComponent } from './infrastructure/layout/header-layout/header-layout.component';
import { MenuComponent } from './infrastructure/layout/header-layout/menu/menu.component';
import { FooterComponent } from './infrastructure/layout/header-layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PublicRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
