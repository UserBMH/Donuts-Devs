import { Component, OnInit } from '@angular/core';
import { DonutService } from '../donut.service';
import { Donuts } from '../donuts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts:Donuts = {} as Donuts;
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
    this.donutService.getAllDonuts().subscribe((response:Donuts) => {
      this.donuts = response;
    });
  }

}
