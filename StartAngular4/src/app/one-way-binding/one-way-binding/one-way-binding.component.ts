import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  public name:string = 'Nguyễn Đình Tuấn';
  public hocVien = {hoTen:'Nguyễn Văn A', gioiTinh:'Nam'}

  constructor() {}
  changeName(obInput:any) {
  this.hocVien.hoTen = obInput.value
  }
  ngOnInit(): void {
  }

}
