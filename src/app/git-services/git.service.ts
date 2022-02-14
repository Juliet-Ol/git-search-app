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
  apiToken: any;
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
      this.http.get<ApiResponse>(environment.apiUrl+this.username+this.repos).toPromise().then(response=>{
        this.repos = response?.apiUrl
        this.repos = response?.username
        this.repos = response?.git
        this.repositories.push(this.repos)
        



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
