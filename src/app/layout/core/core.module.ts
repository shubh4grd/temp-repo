import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
