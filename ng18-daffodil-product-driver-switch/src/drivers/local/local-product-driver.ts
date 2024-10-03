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
export class LocalProductDriverService implements DaffProductServiceInterface {
  constructor() { }

  getAll(): Observable<DaffProduct[]> {
    return of([
      {
        name: 'my demo product',
        id: 'id',
        type: DaffProductTypeEnum.Simple,
        thumbnail: {
          url: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
          label: 'thumbnail',
          id: `someones'thumb`,
        },
        images: [],
        url: 'url',
        price: 100,
      },
      {
        name: 'a second demo product',
        id: 'id',
        type: DaffProductTypeEnum.Simple,
        thumbnail: {
          url: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
          label: 'thumbnail',
          id: `someones'thumb`,
        },
        images: [],
        url: 'url',
        price: 100,
      },
      {
        name: 'another demo product',
        id: 'id',
        type: DaffProductTypeEnum.Simple,
        thumbnail: {
          url: 'https://t4.ftcdn.net/jpg/05/28/15/29/360_F_528152997_fElU6be6dBc3km1sj9MaWyiG9aE53w9n.jpg',
          label: 'thumbnail',
          id: `someones'thumb`,
        },
        images: [],
        url: 'url',
        price: 100,
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