import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstApiComponent } from './first-api.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';

export const paths: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'viewcomponent' },
    { path: 'viewcomponent', component: ViewComponent },
    { path: 'postcomponent', component: PostComponent }
];

export const router: ModuleWithProviders = RouterModule.forRoot(paths);
