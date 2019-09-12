import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  @Output() emiter = new EventEmitter<boolean>();
  public title = 'suma';
  public icn = faEquals;

  constructor() { }

  callOp() {
    this.emiter.emit(true);
  }

  ngOnInit() {
  }

}
