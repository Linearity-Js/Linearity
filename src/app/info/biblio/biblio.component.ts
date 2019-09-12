
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bio',
  templateUrl: './biblio.component.html',
})
export class BiblioComponent {
  constructor(public activeModal: NgbActiveModal) { }
}
