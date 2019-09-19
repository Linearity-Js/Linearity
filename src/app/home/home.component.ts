import { Component, OnInit } from '@angular/core';
import { faInfinity, faInfo, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  faInfinity = faInfinity;
  faGithub = faGithub;
  iconSolver = faInfinity;
  iconInfo = faInfo;
  historyIcon = faBookOpen;

  solverText = 'solver';
  infoText = 'about';
  historyText = 'history';

  operationSystem = `+`;
  constructor() { }

  ngOnInit() {
  }

}
