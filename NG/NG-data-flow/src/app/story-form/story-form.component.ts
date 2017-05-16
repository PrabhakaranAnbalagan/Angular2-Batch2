import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  @Output()
  storyEvent = new EventEmitter();

  newStory: any = { author: '', message: '' };  // model

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    this.storyEvent.emit({ story: this.newStory })
    this.newStory= { author: '', message: '' };  // model
  }

}
