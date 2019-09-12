import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  values = [];
  constructor() { }

  getValues() {
    return this.values;
  }

  setMatrix(matrix) {
    this.values = matrix;
    console.log('the matrix is correctly up!');
    console.log(this.values);
  }

  clearMatrix() {
    this.values = [];
    return this.values;
  }
}
