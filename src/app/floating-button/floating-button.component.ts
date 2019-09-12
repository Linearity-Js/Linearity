import { Component, OnInit } from '@angular/core';
import { faPlus, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  public title = 'suma';
  public icn = faEquals;

  constructor() { }

  ngOnInit() {
  }

}
