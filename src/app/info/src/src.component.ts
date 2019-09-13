import { Component, OnInit } from '@angular/core';
import { faFontAwesome, faAngular, faNode, faBootstrap, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBalanceScale, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-src',
  templateUrl: './src.component.html',
  styleUrls: ['./src.component.css']
})
export class SrcComponent implements OnInit {
  iconDeploy = faNodeJs;
  iconAngular = faAngular;
  iconBootstrap = faBootstrap;
  iconFont = faFontAwesome;
  mit = faBalanceScale;
  git = faGithub;
  mail = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
