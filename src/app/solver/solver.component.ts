import { mult_description } from './../../lgs/lg';
import { Component, OnInit } from '@angular/core';
import { faLaptop, faCalculator, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { addition_title, addition_description, subtraction_title, subtraction_description, scalar_title, scalar_description, gauss_title, gauss_description, gauss_jordan_title, gauss_jordan_description, determinants_description, determinant_title, mult_title } from 'src/lgs/lg';


@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {

  advancedText = 'Advanced operations';
  basicText = 'Basic operations';

  iconAdvanced = faLaptop;
  iconBasic = faCalculator;
  iconLogo = faInfinity;

  addTitle = addition_title;
  addDescription = addition_description;

  subTitle = subtraction_title;
  subDescription = subtraction_description;

  scalarTitle = scalar_title;
  scalarDescription = scalar_description;

  mult_title = mult_title;
  mult_description = mult_description;

  gaussTitle = gauss_title;
  gaussDescription = gauss_description;

  gaussJordanTitle = gauss_jordan_title;
  gaussJordanDescription = gauss_jordan_description;

  detTitle = determinant_title;
  detDescription = determinants_description;

  constructor() {

  }

  ngOnInit() {
  }

}
