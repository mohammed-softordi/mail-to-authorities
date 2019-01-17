import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoriesComponent} from '../stories/stories.component';
import {UploadComponent} from '../upload/upload.component';
import {StoriesCloudComponent} from '../stories-cloud/stories-cloud.component';
import {AuthorityComponent} from '../authority/authority.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: StoriesCloudComponent },
  { path: 'authority/:to', component: AuthorityComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
