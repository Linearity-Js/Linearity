import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  matrixA;
  matrixC; // Auxiliar
  showResult;

  operationSymbol = `+`;
  operator = 'add';
  operationText;

  iconBasic = faCalculator;
  basicText = 'basic operations';

  ngClickGauss() {
    this.operator = 'gss';
  }
  ngClickGaussJordan() {
    this.operator = 'gsj';
  }
  ngClickDet() {
    this.operator = 'det';
  }

  constructor() {
    this.operator = 'gss';
    this.showResult = false;

    this.matrixA = [['1', '2', '0'], ['1', '1', '0'], ['1', '2', '3']];
  }

  submit() {

  }

  ngOnInit() {
  }

}
