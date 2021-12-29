import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDriverService } from './local-driver.service';
import { DaffProductDriver } from '@daffodil/product/driver';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      useExisting: LocalDriverService,
      provide: DaffProductDriver,
    },
  ],
})
export class LocalDriverModule {}
