import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})

export class BasicComponent implements OnInit {

  matrixA;
  matrixB;
  matrixC; // Auxiliar
  showResult;

  operationSymbol = `+`;
  operator = 'add';
  operationText;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  advancedText = 'advenced operations';
  iconAdvanced = faLaptop;

  constructor() {
    this.operationSymbol = `+`;
    this.operator = 'add';
    this.showResult = false;

    this.matrixA = [['1', '2', '0'], ['1', '1', '0'], ['1', '2', '3']];
    this.matrixB = [['3', '7', '0'], ['0', '2', '1'], ['4', '0', '1']];

    this.OpAddMatrix(this.matrixA, this.matrixB);
    console.log(this.matrixC);
    // this.matrix = [['1', '2', '0', '1'], ['1', '1', '2', '1'], ['1', '1', '0', '1'], ['0', '1', '1', '0']];

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
    this.showResult = true;
    switch (this.operator) {
      case 'add':
        this.callAdd();
        break;
      case 'sub':
        this.callSub();
        break;
      case 'mul':
        this.callMul();
        break;
      default:
        console.log('No se ha selecciondo ningun operacion');
        break;
    }
  }

  callAdd() {
    this.OpAddMatrix(this.matrixA, this.matrixB);
  }

  callSub() {
    this.OpSubMatrix(this.matrixA, this.matrixB);
  }

  callMul() {

  }

  OpAddMatrix(A, B) {
    this.matrixC = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      const elementA = A[i];
      this.matrixC[i] = new Array(A[i].length);
      for (let j = 0; j < A[i].length; j++) {
        const element = Number(A[i][j]) + Number(B[i][j]);
        this.matrixC[i][j] = element;
      }
    }
  }

  OpSubMatrix(A, B) {
    this.matrixC = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      const elementA = A[i];
      this.matrixC[i] = new Array(A[i].length);
      for (let j = 0; j < A[i].length; j++) {
        const element = Number(A[i][j]) - Number(B[i][j]);
        this.matrixC[i][j] = element;
      }
    }
  }
  ngOnInit() {
  }

}
