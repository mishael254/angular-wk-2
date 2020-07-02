import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "../app/about/about.component";
import { GithubComponent } from "../app/github/github.component";
import { RepoComponent } from "../app/repo/repo.component";
import { UserComponent } from "../app/user/user.component";


const routes: Routes = [
  {path:'home',component:GithubComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'repositories',component:RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
