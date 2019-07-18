import {Component, OnInit, TemplateRef} from '@angular/core';
import {Hero} from '../model/Hero';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  isOuth : boolean = false ;
  modalRef: BsModalRef;

  component_description = 'first component works fine !';

  hero: Hero = {id : 2 , name : 'med melek'}
  constructor(private modalService: BsModalService) {

    setTimeout(()=>{
      this.isOuth = true ;
    },2000);

  }

  ngOnInit() {}

  getDescription() {
    return this.component_description ;
  }

  log_function () {
    console.log('Hello wolrd !!!')
  }
  log_function2 () {
    this.isOuth =false ;
  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }


}
