import { SharedModuleModule } from './../shared-module/shared-module.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnComponent } from './learn/learn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroductionComponent } from './learn/introduction/introduction.component';
import { SubSpacesComponent } from './learn/sub-spaces/sub-spaces.component';
import { LinearCombinationsComponent } from './learn/linear-combinations/linear-combinations.component';
import { BasisComponent } from './learn/basis/basis.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    LearnComponent,
    IntroductionComponent,
    SubSpacesComponent,
    LinearCombinationsComponent,
    BasisComponent,
    HistoryComponent,
  ],
  imports: [
    SharedModuleModule,
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ]
})
export class LearnModule { }
