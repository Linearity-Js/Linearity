import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gauss-jordan',
  templateUrl: './gauss-jordan.component.html',
  styleUrls: ['./gauss-jordan.component.css']
})
export class GaussJordanComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
