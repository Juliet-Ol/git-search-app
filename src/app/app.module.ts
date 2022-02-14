import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoGitComponent } from './repo-git/repo-git.component';
import { GitService } from './git-services/git.service';


@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    FormComponent,
    ProfileComponent,
    RepoGitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgProgressModule,
    // NgProgressHttpClientModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
