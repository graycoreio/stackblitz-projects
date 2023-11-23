import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogPostPerfComponentComponent } from './blog-post-component.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BlogPostPerfComponentComponent],
    exports: [BlogPostPerfComponentComponent]
})
export class BlogPostPerfComponentModule {}
