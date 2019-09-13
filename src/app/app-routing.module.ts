import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolverComponent } from './solver/solver.component';
import { InfoComponent } from './info/info.component';
import { AdvancedComponent } from './solver/advanced/advanced.component';
import { BasicComponent } from './solver/basic/basic.component';
import { SrcComponent } from './info/src/src.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solver', component: SolverComponent },
  { path: 'solver/advanced', component: AdvancedComponent },
  { path: 'solver/basic', component: BasicComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info/src', component: SrcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
