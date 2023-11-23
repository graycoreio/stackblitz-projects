import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'not-found', pathMatch: 'full', component: NotFoundComponent },
      {
        path: '**',
        canActivate: [],
        component: NotFoundComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
