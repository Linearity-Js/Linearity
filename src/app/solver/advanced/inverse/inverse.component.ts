import { Component, OnInit } from '@angular/core';
import { matrix_inverse } from 'src/lgs/lg';

@Component({
  selector: 'app-inverse',
  templateUrl: './inverse.component.html',
  styleUrls: ['./inverse.component.css']
})
export class InverseComponent implements OnInit {
  title = matrix_inverse;
  constructor() { }

  ngOnInit() {
  }

}
