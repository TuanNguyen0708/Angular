import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfElseComponent } from './directive-if-else/directive-if-else.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';



@NgModule({
  exports: [DirectiveIfComponent, DirectiveIfElseComponent,DirectiveSwitchComponent,DirectiveNgForComponent],
  declarations: [
    DirectiveIfComponent,
    DirectiveIfElseComponent,
    DirectiveSwitchComponent,
    DirectiveNgForComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
