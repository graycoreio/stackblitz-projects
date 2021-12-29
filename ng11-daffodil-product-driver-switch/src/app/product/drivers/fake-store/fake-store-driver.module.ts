import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeStoreService } from './fake-store.service';
import { DaffProductDriver } from '@daffodil/product/driver';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      useExisting: FakeStoreService,
      provide: DaffProductDriver,
    },
  ],
})
export class FakeStoreDriverModule {}
