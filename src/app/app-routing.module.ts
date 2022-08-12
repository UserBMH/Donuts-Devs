import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';

const routes: Routes = [
  {path:"Devs", component:FamousPeopleComponent},
  {path: "Donuts", component:DonutsComponent},
  {path: "Donus/:id", component:DonutDetailsComponent},
  {path:"**", redirectTo:"/Devs", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
