import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { MatrixService } from 'src/app/matrix.service';

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
  sameMatrixSize: boolean;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  advancedText = 'advenced operations';
  iconAdvanced = faLaptop;

  scalar: number;
  scalarIsFocus: boolean;

  constructor(private matrixService: MatrixService) {
    this.operationSymbol = `+`;
    this.operator = 'add';
    this.showResult = false;
    this.scalarIsFocus = false;

    this.matrixA = [['1', '2', '0', '1'], ['1', '1', '0', '1'], ['1', '2', '3', '1']];
    this.matrixB = [['1', '2', '3', '1'], ['1', '2', '0', '1'], ['1', '2', '0', '1']];

    this.matrixA = [['1', '2', '0'], ['1', '1', '0'], ['1', '2', '3']];
    this.matrixB = [['3', '7', '0'], ['0', '2', '1'], ['4', '0', '1']];

    this.OpAddMatrix(this.matrixA, this.matrixB);
    console.log(this.matrixC);
    // this.matrix = [['1', '2', '0', '1'], ['1', '1', '2', '1'], ['1', '1', '0', '1'], ['0', '1', '1', '0']];
    this.sameMatrixSize = this.sameSize(this.matrixA, this.matrixB);
    console.log(`same size?: ${this.sameMatrixSize}`);
  }

  isNumber(num) {
    return (!isNaN(num) && typeof num !== 'undefined');
  }

  sameSize(A, B) {
    // tslint:disable-next-line:max-line-length
    return (this.matrixService.getMatrixCols(this.matrixA) === this.matrixService.getMatrixCols(this.matrixB)) && (this.matrixService.getMatrixCols(this.matrixA) === this.matrixService.getMatrixCols(this.matrixB));
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
    this.OpMulMatrix(this.matrixB);
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

  OpMulMatrix(A) {
    this.matrixC = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      const elementA = A[i];
      this.matrixC[i] = new Array(A[i].length);
      for (let j = 0; j < A[i].length; j++) {
        const element = Number(A[i][j]) * this.scalar;
        this.matrixC[i][j] = element;
      }
    }
  }

  ngOnInit() {
  }

}
