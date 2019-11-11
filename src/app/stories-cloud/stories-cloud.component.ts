import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import _ from 'lodash';
import * as D3 from 'd3-cloud';

import { StoryService } from '../service/story.service';

declare let d3: any;

@Component({
  selector: 'app-stories-cloud',
  templateUrl: './stories-cloud.component.html',
  styleUrls: ['./stories-cloud.component.css']
})
export class StoriesCloudComponent implements OnInit {
  title = 'Worst authorities ever';
  storyWeightedNameCould: Array<any>;
  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  getStoriesCould() {
    this.storyService.getStoriesWithId().subscribe(result => {
      this.storyWeightedNameCould = _.map(_.groupBy(result, 'to'), function (value, key) {
        return {text: key, size: value.length + 25, to: _.split(key, ' ').join('-')}
      });
      this.createCould();
    })
  }

  createCould(){
    let fill = d3.scale.category20();

    let draw = function(words) {
      d3.select("#storiesCloud").append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("cursor", "pointer")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .on("click", onSelectStory.bind(this));
    };
    let layout = d3.layout.cloud()
      .size([800, 600])
      .words(this.storyWeightedNameCould)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw.bind(this));

    let onSelectStory = function(story){
      this.router.navigate(['/authority', story.to]);
    };

    layout.start();

  }

  ngOnInit() {
    this.getStoriesCould();
  }

}
