import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolverComponent } from './solver/solver.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path: '', component: SolverComponent},
  {path: 'home', component: SolverComponent},
  {path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
