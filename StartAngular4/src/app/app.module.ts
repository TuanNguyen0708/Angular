import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BaiTapBindingModule } from './bai-tap-binding/bai-tap-binding.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneWayBindingModule,
    BaiTapBindingModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
