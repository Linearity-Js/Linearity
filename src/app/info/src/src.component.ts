import { Component, OnInit } from '@angular/core';
import { faFontAwesome, faAngular, faNode, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons';

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
  constructor() { }

  ngOnInit() {
  }

}
