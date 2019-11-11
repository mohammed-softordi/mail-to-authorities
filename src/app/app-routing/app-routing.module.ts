import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoriesComponent} from '../stories/stories.component';
import {UploadComponent} from '../upload/upload.component';
import {StoriesCloudComponent} from '../stories-cloud/stories-cloud.component';
import {AuthorityComponent} from '../authority/authority.component';
import {APP_BASE_HREF} from "@angular/common";
import {EmptyRouteComponent} from "../empty-route/empty-route.component";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: StoriesCloudComponent },
  { path: 'authority/:to', component: AuthorityComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  providers: [
      { provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppRoutingModule { }
