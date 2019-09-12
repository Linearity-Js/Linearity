import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SolverComponent } from './solver/solver.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { AdditionComponent } from './solver/addition/addition.component';
import { SubtractionComponent } from './solver/subtraction/subtraction.component';
import { ScalarMultiplicationComponent } from './solver/scalar-multiplication/scalar-multiplication.component';
import { InfoComponent } from './info/info.component';
import { BiblioComponent} from './info/biblio/biblio.component';
import { AdvancedComponent } from './solver/advanced/advanced.component';
import { BasicComponent } from './solver/basic/basic.component';
import { GaussComponent } from './solver/gauss/gauss.component';
import { GaussJordanComponent } from './solver/gauss-jordan/gauss-jordan.component';
import { DeterminantsComponent } from './solver/determinants/determinants.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatrixComponent,
    SolverComponent,
    FloatingButtonComponent,
    AdditionComponent,
    SubtractionComponent,
    ScalarMultiplicationComponent,
    InfoComponent,
    BiblioComponent,
    AdvancedComponent,
    BasicComponent,
    GaussComponent,
    GaussJordanComponent,
    DeterminantsComponent
  ],
  entryComponents: [BiblioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
