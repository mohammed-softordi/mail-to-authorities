import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoryService } from '../service/story.service';

import { Story } from '../data/story';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  title = 'Upload your story';

  story: Story = {
    from: 'Mohammed',
    to: 'Hökarängsskola',
    subject: 'Min son blev biten',
    body: 'The conversation goes here...'
  };
  constructor(public storyService: StoryService) {}

  addStory(story: Story) {
    this.storyService.createStory(story);
  }

  ngOnInit() {

  }

}
