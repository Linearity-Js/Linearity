import { Component, OnInit } from '@angular/core';
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BiblioComponent } from './biblio/biblio.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // pjson = require('../../../package.json');
  pjson = 'B0.6.0';
  version = '';
  book = faBook;
  code = faCode;

  constructor(private modalService: NgbModal) {
    this.version = this.pjson;
  }

  ngOnInit() {
  }

  openBio() {
    const modalRef = this.modalService.open(BiblioComponent);
  }

}
