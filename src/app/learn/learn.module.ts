import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './learn/introduction/introduction.component';



@NgModule({
  declarations: [
    LearnComponent,
    IntroductionComponent,
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class LearnModule { }
