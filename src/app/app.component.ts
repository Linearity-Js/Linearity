import { Component } from '@angular/core';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faInfinity = faInfinity;
  faGithub = faGithub;
  title = 'matrix-solver';
}
