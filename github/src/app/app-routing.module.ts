import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "../app/about/about.component";
import { GithubComponent } from "../app/github/github.component";


const routes: Routes = [
  {path:'home',component:GithubComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
