import { Component, OnInit } from '@angular/core';
import { matrix_transposed } from 'src/lgs/lg';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.css']
})
export class TransposeComponent implements OnInit {

  title = matrix_transposed;

  constructor() { }

  ngOnInit() {
  }

}
