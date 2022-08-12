import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { DonutsComponent } from './donuts/donuts.component';

@NgModule({
  declarations: [
    AppComponent,
   
    FamousPeopleComponent,
    FamousPersonDetailComponent,
    DonutDetailsComponent,
    DonutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
