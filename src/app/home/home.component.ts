import { Component, OnInit } from '@angular/core';
import { faInfinity, faInfo, faBookOpen, faBrain} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Subject } from 'rxjs/internal/Subject';
import {debounceTime} from 'rxjs/operators';

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
  learnIcon = faBrain;
  

  solverText = 'solver';
  infoText = 'about';
  historyText = 'history';
  learnText = 'learn';

  operationSystem = `+`;
  constructor() { }

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 50000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }


}
