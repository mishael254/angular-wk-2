import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubComponent } from './github/github.component';

import { HttpClientModule } from "@angular/common/http";
import { LocalService } from './local-service/local.service';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent,
    UserComponent,
    RepoComponent,
    AboutComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
