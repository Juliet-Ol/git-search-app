import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../git-class/git';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  [x: string]: any;
  git!: Git;

  repositories:any[] = [];
  username:string;
  repos:any = new Git();
  url = "http://api.github.com/users/user"
  getApiUrl: any;
  

  constructor(private http:HttpClient) { 
    this.http = http;
    this.git = new Git ();
    this.username = 'Juliet-Ol' 
       
  }

  gitRequest(){
    interface ApiResponse{
      git:string;
      username:string;
      apiUrl:any
      gitApiKey:any
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.getApiUrl.apiUrl = response?.apiUrl
        this['getGit'].git = response?.git
        this['getUsername'].username = response?.username

        resolve ()       
        
      },
      error=>{
        this.getApiUrl.apiUrl = "user "
        reject(error)
      })      

    })
    return promise
  }

  getGitHubRepo() {

    return this.http.get<any>("https://api.github.com/users/"+ this.username) 
  }
}
