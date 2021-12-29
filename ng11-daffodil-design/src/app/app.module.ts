import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DaffHeroModule } from '@daffodil/design';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, DaffHeroModule],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
