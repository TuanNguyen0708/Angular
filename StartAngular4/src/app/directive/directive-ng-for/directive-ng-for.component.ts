import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-for',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css']
})
export class DirectiveNgForComponent implements OnInit {
  public danhSachSinhVien:Array<any> = [
    {maSV:'01',hoTen:'Nguyễn Đình Tuấn',tuoi:25},
    {maSV:'02',hoTen:'Nguyễn Đình Thanh',tuoi:35},
    {maSV:'03',hoTen:'Nguyễn Đình Mai',tuoi:45},
    {maSV:'04',hoTen:'Nguyễn Đình Sang',tuoi:55},
    {maSV:'05',hoTen:'Nguyễn Đình Tài',tuoi:65}
  ]

  constructor() { }
  themsinhvien(masinhvien:any,hoten:any,tuoi:any) {
    this.danhSachSinhVien.push({maSV:masinhvien, hoTen:hoten, tuoi:tuoi})
  }

  ngOnInit(): void {
  }

}
