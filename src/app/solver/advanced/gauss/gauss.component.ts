import { Component, OnInit } from '@angular/core';
import { gauss_elimination } from 'src/lgs/lg';

@Component({
  selector: 'app-gauss',
  templateUrl: './gauss.component.html',
  styleUrls: ['./gauss.component.css']
})
export class GaussComponent implements OnInit {
  GaussEliminationTitle = gauss_elimination;
  constructor() { }

  ngOnInit() {
  }

}
