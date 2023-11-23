import { Injectable } from '@angular/core';
import { DaffProduct, DaffProductTypeEnum } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDriverService implements DaffProductServiceInterface {
  constructor() {}

  getAll(): Observable<DaffProduct[]> {
    return of([
      {
        name: 'my demo product',
        id: 'id',
        type: DaffProductTypeEnum.Simple,
        thumbnail: {
          url: 'https://image.shutterstock.com/image-photo/closeup-human-thumb-under-lights-260nw-1625557345.jpg',
          label: 'thumbnail',
          id: `someones'thumb`,
        },
        images: [],
        url: 'url',
      },
    ]);
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
