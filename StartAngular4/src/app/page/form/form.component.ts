import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userInput:user = {name:'',email:'',school:''}
  arrUser:user[] = [
    {name:'tuan',email:'tuan@gmail.com',school:'1'},
    {name:'thanh',email:'thanh@gmail.com',school:'2'},
    {name:'ha',email:'ha@gmail.com',school:'3'},
  ]


  submit(values:NgForm) {
    console.log(values,'values')
  }

  school:school[] = [
    {id:'1', name: 'Quang Trung'},
    {id:'2', name: 'Nguyễn Huệ'},
    {id:'3', name: 'Nguyễn Trãi'}
  ]
  edit(userEdit:user) {
    this.userInput = userEdit
  }

  constructor() { }

  ngOnInit(): void {
  }

}
interface user {
  email:string,
  name:string,
  school:string
}

interface school {
  id:string,name:string
}
