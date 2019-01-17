import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';


import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { StoriesComponent } from './stories/stories.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoriesCloudComponent } from './stories-cloud/stories-cloud.component';

import { StoryService } from './service/story.service';
import { AuthorityComponent } from './authority/authority.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    StoriesComponent,
    StoriesCloudComponent,
    AuthorityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
