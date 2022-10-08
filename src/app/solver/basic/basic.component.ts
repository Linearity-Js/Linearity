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

  public matrixA: Matrix;
  public matrixB: Matrix;
  public matrixC: Matrix;

  public message: string;
  public showResult: boolean;
  public showMessage: boolean;

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
    this.showMessage = false;
    this.message = 'loading matrix...'
    this.scalarIsFocus = false;

    this.matrixA = new Matrix(200, `A`, [[1.0, 2.0, 0.0, 1.0], [1.0, 1.0, 0.0, 1.0], [1.0, 2.0, 3.0, 1.0]]);
    this.matrixB = new Matrix(200, `B`, [[1.0, 2.0, 3.0, 1.0], [1.0, 2.0, 0.0, 1.0], [1.0, 2.0, 0.0, 1.0]]);

    this.matrixA = new Matrix(200, `A`, [[8, 3], [2, 4], [3, 6]]);
    this.matrixB = new Matrix(200, `B`, [[1, 2, 3], [4, 6, 8]]);
    this.matrixC = new Matrix(0, 'C', []);
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
    this.showMessage = false;
    this.showResult = true;
    switch (this.operator) {
      case 'add':
        this.callAdd();
        break;
      case 'sub':
        this.callSub();
        break;
      case 'mat':
        this.callMul();
        break;
      case 'esc':
        this.callSca();
        break;
      default:
        {}
        break;
    }
  }

  private callAdd() {
    if (this.matrixA.getMatrixCols() == this.matrixB.getMatrixCols() && this.matrixA.getMatrixRows() == this.matrixB.getMatrixRows()) {
      this.matrixC = this.matrixService.OpAddMatrix(this.matrixA, this.matrixB);
      this.showMessage = false;
    } else {
      const dim = `Dimensions: A rows = ${this.matrixA.getMatrixRows()}, cols = ${this.matrixA.getMatrixCols()}; B rows = ${this.matrixB.getMatrixRows()}, cols = ${this.matrixB.getMatrixCols()}`
      this.message = `A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions. ${dim}`
      this.showMessage = true;
    }
  }


  private callSub() {
    if (this.matrixA.getMatrixCols() == this.matrixB.getMatrixCols() && this.matrixA.getMatrixRows() == this.matrixB.getMatrixRows()) {
      this.matrixC = this.matrixService.OpSubMatrix(this.matrixA, this.matrixB);
      this.showMessage = false;
    } else {
      const dim = `Dimensions: A rows = ${this.matrixA.getMatrixRows()}, cols = ${this.matrixA.getMatrixCols()}; B rows = ${this.matrixB.getMatrixRows()}, cols = ${this.matrixB.getMatrixCols()}`
      this.message = `A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions. ${dim}`
      this.showMessage = true;
    }
  }

  private callSca() {
    if (!isNaN(this.scalar)) {
      this.matrixC = this.matrixService.OpScaMatrix(this.matrixB, this.scalar);
    } else {
      this.scalar = 0;
      this.matrixC = this.matrixService.OpScaMatrix(this.matrixB, 0);
    }

  }

  private callMul() {
    this.matrixC = this.matrixService.OpMulMatrix(this.matrixA, this.matrixB);
    this.showResult = true;
  }

  ngOnInit() {
  }

}
