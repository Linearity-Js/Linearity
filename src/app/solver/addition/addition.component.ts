import { Component, OnInit } from '@angular/core';
import { op_addition_title } from 'src/lgs/lg';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  title = op_addition_title;
  constructor() { }

  ngOnInit() {
  }

}
