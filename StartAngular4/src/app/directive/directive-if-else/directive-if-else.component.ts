import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.css']
})
export class DirectiveIfElseComponent implements OnInit {

  public status:boolean = true

  constructor() { }
  dangXuat() {
    this.status = false
  }
  dangNhap() {
    this.status = true
  }

  ngOnInit(): void {
  }

}
