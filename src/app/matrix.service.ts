import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  matrix = [];
  constructor() { }

  getValues() {
    return this.matrix;
  }

  getMatrixRows(matrix) {
    return matrix[0].length;
  }

  getMatrixCols(matrix) {
    return matrix.length;
  }


  setSize(matrix, row: number, col: number) {
    if (row === col) {
      switch (row) {
        case 2:
          matrix = [[0, 0], [0, 0]];
          break;
        case 3:
          matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
          break;
        case 4:
          matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
          break;
        default:
          break;
      }
    } else {
      matrix = new Array(row);
      for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
        for (let j = 0; j < col; j++) {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }

  setMatrix(matrix) {
    this.matrix = matrix;
    console.log('the matrix is correctly up!');
    console.log(this.matrix);
  }

  cleanMatrix(matrix) {
    let i;
    const n = matrix.length;
    for (i = 0; i < n; ++i) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
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
}
