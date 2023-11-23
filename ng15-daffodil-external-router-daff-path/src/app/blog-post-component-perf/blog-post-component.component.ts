import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post-perf-component',
  templateUrl: './blog-post-component.component.html',
  styleUrls: ['./blog-post-component.component.css'],
})
export class BlogPostPerfComponentComponent implements OnInit {
  constructor(private activatedRouted: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRouted.url.subscribe((a) => {
      this.route$ = a[0].path;
    });
  }

  route$;
}
