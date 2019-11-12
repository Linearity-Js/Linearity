import { determinant_title, matrix_title, vector_sub_spaces_title, vector_spaces_title, systems_equations_title, matrix_inverse } from './../../../lgs/lg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfinity, faInfo, faBookOpen, faBrain, faCircle, faDotCircle, faStar, faStarHalfAlt, faSplotch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  faInfinity = faInfinity;
  faGithub = faGithub;
  EasyIcon = faStar;
  MediumIcon = faStarHalfAlt;
  AdvancedIcon = faSplotch;
  learnIcon = faBrain;


  vectorSpacesText = vector_spaces_title;
  IntroductionText = `Introduction`;
  vectorSubSpacesText = vector_sub_spaces_title;
  LCText = `Linear Combinations`;
  BasisText = `Basis`;

  determinants_title = determinant_title;
  matrix_title = matrix_title;
  systems_equations_title = systems_equations_title;
  inverse_matrix = matrix_inverse;

  TransformationsText = `Transformaciones lineales`;
  BasisChange = `Change of Basis`
  ApplyText = `Applications`;
  ImageAndKernelText = `Image and Kernel`;
  IsomorphismText = `Isomorphism`;
  Diagonalitation = `Diagonalization`;

  solverText = 'solver';
  infoText = 'about';
  historyText = 'history';
  learnText = 'learn';



  constructor() { }

  ngOnInit() {
  }

}
