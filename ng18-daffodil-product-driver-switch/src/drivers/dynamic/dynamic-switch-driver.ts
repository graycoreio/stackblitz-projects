import { Injectable } from '@angular/core';
import {
  DaffProductServiceInterface,
  DaffProductDriverResponse
} from '@daffodil/product/driver';
import { DaffProduct } from '@daffodil/product';
import { Observable, of } from 'rxjs';

import { FakeProductDriverService } from '../fake/fake-product-driver';
import { LocalProductDriverService } from '../local/local-product-driver';


@Injectable({
  providedIn: 'root',
})
export class DynamicSwitchDriverService implements DaffProductServiceInterface {
  private currentDriver: DaffProductServiceInterface;

  constructor(
    private fakeProductDriver: FakeProductDriverService,
    private localProductDriver: LocalProductDriverService
  ) {
    this.currentDriver = this.localProductDriver;
  }

  switchDriver(driverType: 'local' | 'fake'): void {
    if (driverType === 'local') {
      this.currentDriver = this.localProductDriver;
    } else if (driverType === 'fake') {
      this.currentDriver = this.fakeProductDriver;
    }
  }

  getAll(): Observable<DaffProduct[]> {
    return this.currentDriver.getAll();
  }

  getBestSellers(): Observable<DaffProduct[]> {
    throw new Error('Method not implemented.');
  }
  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }
  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    throw new Error('Method not implemented.');
  }
}