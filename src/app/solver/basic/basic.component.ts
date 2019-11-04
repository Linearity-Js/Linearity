import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus, faStarOfLife, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { MatrixService } from 'src/app/matrix.service';
import { Matrix } from 'src/app/matrix.model';
import { advanced_op_title, basic_op_title, addition_title, subtraction_title, scalar_title, mult_title } from 'src/lgs/lg';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})

export class BasicComponent implements OnInit {

  matrixA: Matrix;
  matrixB: Matrix;
  matrixC: Matrix;

  showResult;

  operationSymbol = `+`;
  operator = 'add';
  operationText;
  sameMatrixSize: boolean;

  plus = faPlus;
  minus = faMinus;
  dot = faStarOfLife;

  basicText = advanced_op_title;
  AdditionText = addition_title;
  SubtractionText = subtraction_title;
  MultiplicationText = mult_title;
  iconAdvanced = faLaptop;

  scalar: number;
  scalarIsFocus: boolean;


  constructor(private matrixService: MatrixService, private _Activatedroute: ActivatedRoute) {
    this.operator = 'add';
    this.operator = this._Activatedroute.snapshot.paramMap.get("id");
    this.setSymbol();
    this.showResult = false;
    this.scalarIsFocus = false;

    this.matrixA = new Matrix(200, `A`, [[1.0, 2.0, 0.0, 1.0], [1.0, 1.0, 0.0, 1.0], [1.0, 2.0, 3.0, 1.0]]);
    this.matrixB = new Matrix(200, `B`, [[1.0, 2.0, 3.0, 1.0], [1.0, 2.0, 0.0, 1.0], [1.0, 2.0, 0.0, 1.0]]);
  }

  isNumber(num) {
    return (!isNaN(num) && typeof num !== 'undefined');
  }

  sameSize(A, B) {
    // tslint:disable-next-line:max-line-length
    return (this.matrixService.getMatrixCols(this.matrixA) === this.matrixService.getMatrixCols(this.matrixB)) && (this.matrixService.getMatrixCols(this.matrixA) === this.matrixService.getMatrixCols(this.matrixB));
  }

  ngOnClickPlus() {
    this.operator = 'add';
    this.setSymbol();
  }

  ngOnClickDot(operator) {
    this.operator = operator;
    console.info(operator)
    this.setSymbol();
  }

  ngOnClickMinus() {
    this.operator = 'sub';
    this.setSymbol();
  }

  private setSymbol() {
    switch (this.operator) {
      case 'add':
        this.operationSymbol = `+`;
        break;
      case 'sub':
        this.operationSymbol = `-`;
        break;
      case 'esc':
        this.operationSymbol = `*`;
        break;
      case 'mat':
        this.operationSymbol = `*`;
        break;
      default:
        this.operator = 'add';
        this.operationSymbol = `+`;
        break;
    }
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
      case 'esc':
        this.callMul();
        break;
      default:
        console.log('No se ha selecciondo ningun operacion');
        break;
    }
  }

  callAdd() {
    this.matrixC = this.matrixService.OpAddMatrix(this.matrixA, this.matrixB);
    this.showResult = this.matrixService.validMatrix(this.matrixC);

  }

  callSub() {
    this.matrixC = this.matrixService.OpSubMatrix(this.matrixA, this.matrixB);
    this.showResult = this.matrixService.validMatrix(this.matrixC);
  }

  callMul() {
    this.matrixC = this.matrixService.OpMulMatrix(this.matrixB, this.scalar);
    this.showResult = this.matrixService.validMatrix(this.matrixC);
  }

  ngOnInit() {
  }

}
