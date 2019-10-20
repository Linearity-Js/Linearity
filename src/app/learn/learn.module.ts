import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './learn/introduction/introduction.component';
import { BasisComponent } from './learn/basis/basis.component';



@NgModule({
  declarations: [
    LearnComponent,
    IntroductionComponent,
    BasisComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class LearnModule { }
