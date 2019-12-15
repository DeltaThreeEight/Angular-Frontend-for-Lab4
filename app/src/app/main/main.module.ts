import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { HistoryComponent } from './history/history.component';
import { CheckPointsComponent } from './check-points/check-points.component';
import {MainRoutingModule} from "./main-routing.module";
import {FormsModule} from "@angular/forms";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  declarations: [MainComponent, InfoComponent, HistoryComponent, CheckPointsComponent]
})
export class MainModule { }