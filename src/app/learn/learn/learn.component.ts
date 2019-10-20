import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfinity, faInfo, faBookOpen,faBrain, faCircle, faDotCircle, faStar, faStarHalfAlt, faSplotch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  faInfinity = faInfinity;
  faGithub = faGithub;
  EasyIcon = faStar;
  MediumIcon = faStarHalfAlt;
  AdvancedIcon = faSplotch;
  learnIcon = faBrain;
  
  vectorSpacesText = `Vector Spaces`;
  IntroductionText = `Introduction`;
  vectorSubSpacesText = `Vector Sub-Spaces`;
  LCText = `Linear Combinations`;
  BasisText = `Basis`;


  solverText = 'solver';
  infoText = 'about';
  historyText = 'history';
  learnText = 'learn';



  constructor() { }

  ngOnInit() {
  }

}
