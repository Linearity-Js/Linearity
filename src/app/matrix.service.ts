import { Injectable } from '@angular/core';
import { Matrix } from './matrix.model';
import { DataRequestService } from './data-request.service';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  matrix: Matrix;
  max = 12;

  constructor(private dataRequest: DataRequestService) { }

  getValues() {
    return this.matrix.data;
  }

  getMatrixRows(matrix: Matrix): number {
    try {
      return matrix.data.length;
    } catch (error) {
      return 0;
    }
  }

  getMatrixCols(matrix: Matrix): number {
    try {
      return matrix.data[0].length;
    } catch (error) {
      return 0;
    }
  }

  fixSize(row, col) {
    let numberRow = row;
    let numberCol = col;
    if (row < 1) {
      numberRow = 1;
    } else if (row > this.max) {
      numberRow = this.max;
    } else {
      numberRow = 3;
    }
    if (col > this.max) {
      numberCol = this.max;
    } else if (col < 1) {
      numberCol = 1;
    } else {
      numberCol = 3;
    }
    return [numberRow, numberCol];
  }

  validateSize(row, col) {
    return (row <= this.max && col <= this.max && ((row >= 1 && col > 1) || (row > 1 && col >= 1)));
  }

  setSize(data, row: number, col: number) {
    if (row === col) {
      switch (row) {
        case 2:
          data = [[0, 0], [0, 0]];
          break;
        case 3:
          data = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
          break;
        case 4:
          data = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
          break;
        default:
          break;
      }
    } else {
      data = new Array(row);
      for (let i = 0; i < row; i++) {
        data[i] = new Array(col);
        for (let j = 0; j < col; j++) {
          data[i][j] = 0;
        }
      }
    }
    return data;
  }

  setMatrix(matrix: Matrix) {
    this.matrix = matrix;
    // console.log('the matrix is correctly up!');
    // console.log(this.matrix);
  }

  cleanMatrix(matrix: Matrix) {
    let i;
    const n = matrix.data.length;
    for (i = 0; i < n; ++i) {
      for (let j = 0; j < matrix.data[i].length; j++) {
        matrix.data[i][j] = 0;
      }
    }
    return matrix;
  }

  getIdentity(matrix) {
    // matrix = this.cleanMatrix(matrix);
    const l = matrix.length;
    let position = 0;
    for (let i = 0; i < l; i++) {
      const element = matrix[i];
      for (let e = 0; e < element.length; e++) {
        if (e === position) {
          matrix[i][e] = 1;
        } else {
          matrix[i][e] = 0;
        }
      }
      position++;
    }
    return matrix;
  }

  OpAddMatrix(A: Matrix, B: Matrix): Matrix {
    const matrixC = new Matrix(0, `C`, new Array(A.data.length));
    for (let i = 0; i < A.data.length; i++) {
      matrixC.data[i] = new Array(A.data[i].length);
      for (let j = 0; j < A.data[i].length; j++) {
        const element = Number(A.data[i][j]) + Number(B.data[i][j]);
        matrixC.data[i][j] = element;
      }
    }
    return matrixC;
  }

  OpSubMatrix(A: Matrix, B: Matrix): Matrix {
    const matrixC = new Matrix(0, `C`, new Array(A.data.length));
    for (let i = 0; i < A.data.length; i++) {
      matrixC.data[i] = new Array(A.data[i].length);
      for (let j = 0; j < A.data[i].length; j++) {
        const element = Number(A.data[i][j]) - Number(B.data[i][j]);
        matrixC.data[i][j] = element;
      }
    }
    return matrixC;
  }

  OpMulMatrix(A: Matrix, scalar: number): Matrix {
    const matrixC = new Matrix(0, `C`, new Array(A.data.length));
    for (let i = 0; i < A.data.length; i++) {
      matrixC.data[i] = new Array(A.data[i].length);
      for (let j = 0; j < A.data[i].length; j++) {
        const element = Number(A.data[i][j]) * scalar;
        matrixC.data[i][j] = element;
      }
    }
    return matrixC;
  }

  OpGetGauss(A: Matrix): Matrix {
    const obj2 = JSON.parse(this.getMatrixDataJSON(A));
    const js = obj2;

    this.dataRequest.getGauss(js).subscribe( val => console.log(val));
    return A;
  }


  public getMatrixDataJSON(matrix: Matrix): string {
    return `{"matrix": [${this.getDataJson(matrix)}]}`;
  }


  private getDataJson(matrix: Matrix): string {
    let dataText = ``;
    let r;
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < matrix.data.length; index++) {
      r = matrix.data[index];

      if (index === 0) {
        dataText = `${dataText} [`;
      } else {
        dataText = `${dataText}, [`;
      }

      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < r.length; j++) {

        if (j !== 0) {
          dataText = `${dataText},`;
        }

        const element = r[j];

        dataText = `${dataText} ${element}`;
      }
      dataText = `${dataText} ]`;
    }
    return dataText;
  }
}
