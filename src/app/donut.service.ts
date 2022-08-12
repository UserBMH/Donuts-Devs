import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  apiUrl:string = "https://grandcircusco.github.io/demo-apis/donuts"
  apiEnd:string = ".json"
  constructor(private http:HttpClient) { }

  getAllDonuts():any{
    return this.http.get(`${this.apiUrl}${this.apiEnd}`);
  }

  getById(id:number):any{
    return this.http.get(`${this.apiUrl}/${id}${this.apiEnd}`)
  }
}
