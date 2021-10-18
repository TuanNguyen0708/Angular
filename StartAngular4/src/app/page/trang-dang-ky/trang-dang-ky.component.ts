import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.css']
})
export class TrangDangKyComponent implements OnInit {
  @ViewChild('formDangKy')  formDK!:NgForm

  mangDangKy:any = []

  constructor(private router: ActivatedRoute) { }
  dangKy(value:any) {
    this.mangDangKy.push(value);
    this.formDK.reset()
  }
  

  ngOnInit(): void {
    let id = this.mangDangKy.id
    console.log(id)
  }

}
