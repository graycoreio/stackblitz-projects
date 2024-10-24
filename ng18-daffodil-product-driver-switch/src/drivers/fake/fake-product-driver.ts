import { Injectable } from '@angular/core';
import { DaffProduct, DaffProductTypeEnum } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FakeProduct } from './fake-product';

@Injectable({
  providedIn: 'root',
})
export class FakeProductDriverService implements DaffProductServiceInterface {
  readonly url: string = 'https://fakestoreapi.com/';

  constructor(private client: HttpClient) { }

  getAll(): Observable<DaffProduct[]> {
    return this.client.get<FakeProduct[]>(this.url + 'products').pipe(
      map((fakeProducts: FakeProduct[]): DaffProduct[] => {
        return fakeProducts.map(this.mapFakeProducts);
      })
    );
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

  private mapFakeProducts(product: FakeProduct): DaffProduct {
    return {
      id: product.id.toString(),
      images: [
        {
          id: '1',
          label: product.title,
          url: product.image,
        },
      ],
      name: product.title,
      thumbnail: {
        id: '1',
        label: product.title,
        url: product.image,
      },
      type: DaffProductTypeEnum.Simple,
      url: `/product/${product.id}`,
      price: product.price,
    };
  }
}
