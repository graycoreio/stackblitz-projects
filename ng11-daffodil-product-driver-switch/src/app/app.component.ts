import { Component, Inject, OnInit } from '@angular/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriver,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products$: Observable<DaffProduct[]> = of([]);

  constructor(
    @Inject(DaffProductDriver) private driver: DaffProductServiceInterface
  ) {}

  ngOnInit(): void {
    this.products$ = this.driver.getAll();
  }
}
