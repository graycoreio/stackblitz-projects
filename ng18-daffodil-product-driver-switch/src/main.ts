import { Component, ChangeDetectionStrategy } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';
import { DaffProduct } from '@daffodil/product';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideDaffProductDriver } from './provideDriver';
import { DynamicSwitchDriverService } from './drivers/dynamic/dynamic-switch-driver';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffCardModule } from '@daffodil/design/card';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgFor, AsyncPipe, DaffImageModule, DaffCardModule],
  template: `
    <h1>Product Driver Switch Demo</h1>

    <select (change)="onDriverChange($event)">
      <option value="local">Local Product Driver</option>
      <option value="fake">Fake Product Driver</option>
    </select>
    <div class="product-grid">
      <div *ngFor="let item of products$ | async">
        <daff-raised-card>
          <daff-image daffCardImage
            class="product-image"
            src={{item.thumbnail.url}}
            alt={{item.thumbnail.label}}
            [width]="200"
            [height]="300"
          >
          </daff-image>
          <div daffCardContent>
            <p daffCardTitle>{{ item.name }}</p>
            <p>$ {{item.price}}</p>
          </div>
        </daff-raised-card>
      </div>
    </div>
  `,
})
export class App {
  products$: Observable<DaffProduct[]> = of([]);

  constructor(private dynamicDriverService: DynamicSwitchDriverService) { }

  ngOnInit(): void {
    this.products$ = this.dynamicDriverService.getAll();
  }

  onDriverChange(event: any): void {
    const selectedDriver = event.target.value;
    this.dynamicDriverService.switchDriver(selectedDriver);
    this.products$ = this.dynamicDriverService.getAll();
  }
}

bootstrapApplication(App, {
  providers: [
    provideDaffProductDriver(DynamicSwitchDriverService),
    provideRouter([]),
    provideHttpClient(),
  ],
});