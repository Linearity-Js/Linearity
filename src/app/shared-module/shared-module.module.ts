import { MathjaxComponent } from './mathjax/mathjax.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [MathjaxComponent],
  exports: [MathjaxComponent,
    CommonModule
  ]
})
export class SharedModuleModule { }
