import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: Observable<any[]>;

  constructor(public db:AngularFirestore) {
  }


  getStory(storyKey) {
    return this.db.collection('/story').doc(storyKey).valueChanges();
  }

  deleteStory(storyKey) {
    return this.db.collection('/story').doc(storyKey).delete();
  }

  getStories() {
    return this.db.collection('/story').valueChanges();
  }

  searchStories(searchValue) {
    return this.db.collection('/story', ref => ref.where('to', '==', searchValue)).valueChanges()
  }

  createStory(value) {
    return this.db.collection('/story').add({
      from: value.from,
      to: value.to,
      subject: value.subject,
      body: value.body
    });
  }

  getStoriesWithId(){
    return this.colWithIds$('/story');
  }
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.db.collection(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map(changes =>
          return changes.map(function(c){
            return {id: c.payload.doc.id, ...c.payload.doc.data()}
          })
        )
      );
  }
}
