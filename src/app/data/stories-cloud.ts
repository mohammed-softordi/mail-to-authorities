import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import {_} from 'lodash';

import { Story } from '../data/story';

export class StoriesCloud implements OnInit {
    public stories: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.stories = db.collection('/story').valueChanges();
    _.each(this.stories, function(story){
      console.log(story);
    });
  }
  ngOnInit() {
  }
}
