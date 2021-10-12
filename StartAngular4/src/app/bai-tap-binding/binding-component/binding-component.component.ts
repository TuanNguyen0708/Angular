import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-component',
  templateUrl: './binding-component.component.html',
  styleUrls: ['./binding-component.component.css']
})
export class BindingComponentComponent implements OnInit {
  public info = {email:'twowaybinding',fullName:'eventbinding'}

  constructor() { }
  changeClick(changeEmail:any,changeName:any){
    this.info.email = changeEmail.value
    this.info.fullName = changeName.value


  }

  ngOnInit(): void {
  }

}
