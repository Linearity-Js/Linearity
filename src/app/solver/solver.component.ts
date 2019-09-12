import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {
  operationSymbol = `+`;
  operator = 'sum';
  operationText;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  constructor() {
    this.operationSymbol = `+`;
    this.operator = 'sum';
  }

  ngOnClickPlus() {
    this.operationSymbol = `+`;
    this.operator = 'sum';
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
  }

  ngOnInit() {
  }

}
