import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { MathJaxDirective } from 'src/app/math-jax/math-jax.directive';
// import { MathJaxModule } from 'src/app/math-jax/math-jax.module';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { determinant_title } from 'src/lgs/lg';

@Component({
  selector: 'app-determinants',
  templateUrl: './determinants.component.html',
  styleUrls: ['./determinants.component.css']
})

@NgModule({
  declarations: [DeterminantsComponent],
  imports: [
    CommonModule,
    // MathJaxModule.forChild(),
    DeterminantsComponent,
    FormsModule,
    HttpClientModule
  ]
})

export class DeterminantsComponent implements OnInit {

  title = determinant_title;

  constructor(private modalService: NgbModal) { }
  expression1 = `$$det(A) = \\sum_{i=1}^{n} a_{i,1} A_{i,1}$$`;
  expression2 = `$$A_{i,j} = (-1)^{i + j}det(M)$$`;

  // @ViewChild('mdSrc', { read: MathJaxDirective, static: true })
  // mdSrcMathJax: MathJaxDirective;

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
