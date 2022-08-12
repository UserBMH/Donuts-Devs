import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {



  constructor(private http:HttpClient) { }

  getHallOfFame():any{
    return this.http.get("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json")
  }
}
