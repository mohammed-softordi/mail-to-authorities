import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import _ from 'lodash';

import { StoryService } from '../service/story.service';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {
  public authorityStories: Observable<any[]>;
  constructor(
    public storyService: StoryService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
   this.getAuthorityStories();
  }

  getAuthorityStories() {
    let authority =  _.get(this.route.snapshot.paramMap, 'params.to');
        authority = _.split(authority, '-').join(' ');

    this.authorityStories =  this.storyService.searchStories(authority);
  }
}
