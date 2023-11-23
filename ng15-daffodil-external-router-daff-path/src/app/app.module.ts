import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogPostComponentModule } from './blog-post-component/blog-post-component.module';
import { BlogPostPerfComponentModule } from './blog-post-component-perf/blog-post-component.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogPostComponentModule,
    BlogPostPerfComponentModule,
  ],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
