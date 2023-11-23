import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { DaffExternalRouterDriverTestingModule } from '@daffodil/external-router/driver/testing';
import {
  daffDataPathUrlMatcher,
  DaffExternalRouterModule,
  daffInsertDataPathStrategy,
} from '@daffodil/external-router';
import { DaffExternalRouterExistenceGuard } from '@daffodil/external-router/routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogPostComponentComponent } from './blog-post-component/blog-post-component.component';
import { BlogPostPerfComponentComponent } from './blog-post-component-perf/blog-post-component.component';

@NgModule({
  imports: [
    BrowserModule,
    DaffExternalRouterDriverTestingModule.forRoot({
      'blog-post-1': 'BLOG_POST',
      'blog-post-2': 'BLOG_POST',
      'perf-blog-post-1': 'PERF_BLOG_POST',
      'perf-blog-post-2': 'PERF_BLOG_POST',
    }),
    DaffExternalRouterModule.forRoot(
      {
        failedResolutionPath: 'not-found',
        notFoundResolutionPath: 'not-found',
      },
      [
        {
          type: 'BLOG_POST',
          route: {
            component: BlogPostComponentComponent,
          },
        },
        {
          type: 'PERF_BLOG_POST',
          insertionStrategy: daffInsertDataPathStrategy,
          route: {},
        },
      ]
    ),
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'not-found', pathMatch: 'full', component: NotFoundComponent },
      {
        matcher: daffDataPathUrlMatcher,
        data: { daffExternalRouteType: 'PERF_BLOG_POST' },
        component: BlogPostPerfComponentComponent,
      },
      {
        path: '**',
        canActivate: [DaffExternalRouterExistenceGuard],
        component: NotFoundComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
