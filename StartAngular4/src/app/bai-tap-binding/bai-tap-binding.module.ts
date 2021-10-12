import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponentComponent } from './binding-component/binding-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [BindingComponentComponent],
  declarations: [
    BindingComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BaiTapBindingModule { }
