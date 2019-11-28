import { Component, OnInit } from '@angular/core';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faInfinity = faInfinity;
  constructor() { }

  ngOnInit() {
  }

}
