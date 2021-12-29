import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeStoreDriverModule } from './product/drivers/fake-store/fake-store-driver.module';
import { LocalDriverModule } from './product/drivers/local/local-driver.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FakeStoreDriverModule,
    LocalDriverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
