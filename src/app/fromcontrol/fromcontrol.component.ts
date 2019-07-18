import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Hero} from '../model/Hero';

@Component({
  selector: 'app-fromcontrol',
  templateUrl: './fromcontrol.component.html',
  styleUrls: ['./fromcontrol.component.css']
})
export class FromcontrolComponent implements OnInit {

  hero : Hero = {
    id : 1 ,
    name : 'med melek'
  }
  name = new FormControl(this.hero.name) ;
  isName = false ;

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    console.log(this.name.value)
  }

  namechange() {
    console.log(this.name.value)
    if (this.name.value != this.hero.name) {
      this.isName=true ;
    }else{
      this.isName = false ;
    }
  }

}
