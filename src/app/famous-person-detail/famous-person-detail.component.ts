import { Component, Input, OnInit } from '@angular/core';
import { Complete } from '../hall-of-fame';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {

  @Input() person:Complete = {} as Complete;
  display:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.display = !this.display;
  }
}
