import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../donut.service';
import { SingleDonut } from '../single-donut';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  displayDonut:SingleDonut = {} as SingleDonut;
  constructor(private route:ActivatedRoute, private donutService:DonutService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    //console.log(id);
    this.donutService.getById(id).subscribe((response:SingleDonut) => {
      this.displayDonut = response;
    });
  }





}
