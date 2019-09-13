import { Component, OnInit } from '@angular/core';
import { faLaptop, faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {

  advancedText = 'advenced operations';
  basicText = 'basic operations';

  iconAdvanced = faLaptop;
  iconBasic = faCalculator;
  constructor() {

  }

  ngOnInit() {
  }

}
