import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [OneWayBindingComponent],
  declarations: [
    OneWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class OneWayBindingModule { }
