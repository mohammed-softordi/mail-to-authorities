import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//import {STORIES} from "../data/mock-stories";
 import { StoryService } from '../service/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})

export class StoriesComponent implements OnInit {
  title = 'This is how it goes when the syten doesn\'t work';
  panelOpenState = false;
  public stories: Observable<any[]>;


  constructor(public storyService: StoryService) {}

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

}
