import { Type } from '@angular/core';
import {
  DaffProductServiceInterface,
  DaffProductDriver,
} from '@daffodil/product/driver';
import { Provider } from '@angular/core';

export const provideDaffProductDriver = (
  driver: Type<DaffProductServiceInterface>
): Provider[] => {
  return [
    {
      useExisting: driver,
      provide: DaffProductDriver,
    },
  ];
};
