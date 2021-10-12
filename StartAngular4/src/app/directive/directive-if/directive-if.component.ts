import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.css']
})
export class DirectiveIfComponent implements OnInit {

  public status:boolean = true;

  constructor() { }
  show(){
    this.status = true
  }
  hiden(){
    this.status = false
  }

  ngOnInit(): void {
  }

}
