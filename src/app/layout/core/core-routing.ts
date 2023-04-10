import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/auth/components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";



export const CoreRouting : Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'dashboard', component: DashboardComponent}
]