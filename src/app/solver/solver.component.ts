import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {
  matrixA;
  matrixB;
  matrixC; // Auxiliar

  operationSymbol = `+`;
  operator = 'add';
  operationText;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  constructor() {
    this.operationSymbol = `+`;
    this.operator = 'add';


    // this.matrix = [
    //   { x: 1, y: 2, z: 3 },
    //   { x: 1, y: 2, z: 3 },
    //   { x: 1, y: 2, z: 3 }
    // ];


    // this.matrix = [
    //   [{ 0: 1, 1: 2, 2: 3 }],
    //   [{ 0: 1, 1: 2, 2: 3 }],
    //   [{ 0: 1, 1: 2, 2: 3 }]
    // ];


    // this.matrix = [['1', '0'], ['2', '0'], ['0', '0']];
    // this.matrix = [['1', '0'], ['2', '0'], ['0', '0']];
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

  ngOnInit() {
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

}
