import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { Matrix } from 'src/app/matrix.model';
import { MatrixService } from 'src/app/matrix.service';
import { advanced_op_title, determinant_title, basic_op_title } from 'src/lgs/lg';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  matrixA: Matrix;
  matrixC: Matrix; // Auxiliar
  showResult;

  operator;
  operationText;

  iconBasic = faCalculator;
  advancedText = basic_op_title;
  determinantText = determinant_title;

  closeResult() {
    this.showResult = false;
  }

  ngClickGauss() {
    this.operator = 'gss';
  }
  ngClickGaussJordan() {
    this.operator = 'gsj';
  }
  ngClickDet() {
    this.operator = 'det';
  }

  constructor(private matrixService: MatrixService, private _Activatedroute: ActivatedRoute) {
    this.operator = 'gss';

    this.operator = this._Activatedroute.snapshot.paramMap.get("id");
    if (this.operator != 'gss' && this.operator != 'gsj' && this.operator != 'det') {
      this.operator = 'gss';
    }

    this.showResult = false;
    this.matrixA = new Matrix(200, `A`, [[1.0, 1.0, 1.0, 1.0], [2.0, 1.0, 1.0, 1.0], [2.0, 2.0, 1.0, 1.0]]);
    // this.matrixA = new Matrix(200, `A`, [[1.0, 1.0, 1.0, 1.0], [2.0, 1.0, 1.0, 1.0], [2.0, 2.0, 1.0, 1.0], [0.0, 2.0, 2.0, 1.0]]);
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
    this.showResult = false;
  }

  submit() {
    this.showResult = true;
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
