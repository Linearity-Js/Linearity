import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-linear-combinations',

  templateUrl: './linear-combinations.component.html',
  styleUrls: ['./linear-combinations.component.css']
})

export class LinearCombinationsComponent implements OnInit {
  public expression1;

  constructor() {
    this.expression1 = `$$v = k_{1}v_{1} + k_{2}v_{2}, . . . + k_{r}v_{r}, $$`;
    // this.expression1 = `$$det(A) = \\sum_{i=1}^{n} a_{i,1} A_{i,1}$$`;
  }

  ngOnInit() {
  }

}
