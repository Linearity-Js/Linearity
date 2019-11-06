import { HistoryComponent } from './learn/history/history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolverComponent } from './solver/solver.component';
import { InfoComponent } from './info/info.component';
import { AdvancedComponent } from './solver/advanced/advanced.component';
import { BasicComponent } from './solver/basic/basic.component';
import { SrcComponent } from './info/src/src.component';
import { LearnComponent } from './learn/learn/learn.component';
import { IntroductionComponent } from './learn/learn/introduction/introduction.component';
import { SubSpacesComponent } from './learn/learn/sub-spaces/sub-spaces.component';
import { LinearCombinationsComponent } from './learn/learn/linear-combinations/linear-combinations.component';
import { BasisComponent } from './learn/learn/basis/basis.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solver', component: SolverComponent },
  { path: 'solver/advanced/:id', component: AdvancedComponent },
  { path: 'solver/advanced', component: AdvancedComponent },
  { path: 'solver/basic/:id', component: BasicComponent },
  { path: 'solver/basic', component: BasicComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'learn/2/introduction', component: IntroductionComponent },
  { path: 'learn/2/sub-spaces', component: SubSpacesComponent },
  { path: 'learn/2/linear-combinations', component: LinearCombinationsComponent },
  { path: 'learn/2/basis', component: BasisComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info/src', component: SrcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
