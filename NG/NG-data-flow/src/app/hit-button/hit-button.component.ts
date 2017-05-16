import { Component, OnInit, EventEmitter, Output ,Input} from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

  @Output()
  onhit = new EventEmitter();

  @Input()
  incBy: number;  

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log('emitting onhit event');
    this.onhit.emit({incBy:this.incBy}); // custom-event as output of this comp
  }

}
