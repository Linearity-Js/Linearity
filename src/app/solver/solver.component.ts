import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {
  operationSymbol = `+`;
  operator = 'add';
  operationText;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  constructor() {
    this.operationSymbol = `+`;
    this.operator = 'add';
  }

  ngOnClickPlus() {
    this.operationSymbol = `+`;
    this.operator = 'add';
  }

  ngOnClickDot() {
    this.operationSymbol = `*`;
    this.operator = 'mul';
  }

  ngOnClickMinus() {
    this.operationSymbol = `-`;
    this.operator = 'sub';
  }

  submit() {
    console.log('realizando submit');
    switch (this.operator) {
      case 'sum':
        this.callAdd();
        break;
      case 'sub':
        this.callSub();
        break;
      case 'mul':
        this.callMul();
        break;
      default:
        break;
    }
  }

  callAdd() {

  }

  callSub() {

  }

  callMul() {

  }

  ngOnInit() {
  }

}
