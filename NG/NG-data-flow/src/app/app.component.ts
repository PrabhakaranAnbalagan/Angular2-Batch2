import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count: number = 1;


  storyList: any[] = [
    { author: 'Nag', message: 'NG is awesome f.w' },
    { author: 'Ria', message: 'Nag is my dad' }
  ];

  addNewStory(event) {
    // send this new-story to server with API call
    this.storyList.push(event.story);
  }

  ngOnInit() {
    //setInterval(()=>{++this.count},1000);
  }

  incCount(event) {
    console.log('incrementing count onhit event');
    this.count += event.incBy;
  }

}
