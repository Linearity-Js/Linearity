import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { Matrix } from 'src/app/matrix.model';
import { MatrixService } from 'src/app/matrix.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  matrixA: Matrix;
  matrixC: Matrix; // Auxiliar
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

  constructor(private matrixService: MatrixService) {
    this.operator = 'gss';
    this.showResult = false;
    this.matrixA = new Matrix(1, `A`, [[1.0, 1.0, 1.0, 1.0], [2.0, 1.0, 1.0, 1.0], [2.0, 2.0, 1.0, 1.0]]);
    // this.matrixA = new Matrix(1, `A`, [[1.0, 1.0, 1.0, 1.0], [2.0, 1.0, 1.0, 1.0], [2.0, 2.0, 1.0, 1.0], [0.0, 2.0, 2.0, 1.0]]);
  }

  callGauss() {
    this.matrixC = this.matrixService.OpGetGauss(this.matrixA);
    this.showResult = true;
  }

  callGaussJordan() {
    this.matrixC = this.matrixService.OpGetGaussJordan(this.matrixA);
    this.showResult = true;
  }

  callDeterminants() {

  }

  submit() {
    switch (this.operator) {
      case 'gss':
        this.callGauss();
        break;
      case 'gsj':
        this.callGaussJordan();
        break;

      case 'det':
        this.callDeterminants();
        break;
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
