import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { BaiTapBindingModule } from './bai-tap-binding/bai-tap-binding.module';
import { DirectiveModule } from './directive/directive.module';
import { FormComponent } from './page/form/form.component';
import { FormsModule } from '@angular/forms';
import { TrangDangKyComponent } from './page/trang-dang-ky/trang-dang-ky.component';
import { TrangDangNhapComponent } from './page/trang-dang-nhap/trang-dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TrangDangKyComponent,
    TrangDangNhapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneWayBindingModule,
    BaiTapBindingModule,
    DirectiveModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
