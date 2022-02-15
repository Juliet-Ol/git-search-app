import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../git-class/git';


@Injectable({
  providedIn: 'root'
})

export class GitService {
 
  link = 'https://api.github.com/users/';
  user!: Git
    
  

  constructor(public  http:HttpClient) {
    
    this.user = new Git('','','','')

    
   }
   

    getProfile(userName:string){
      console.log("profile service");
      
          let url = `${this.link}${userName}`;
      
      let promise = new Promise((resolve, reject) => {
        fetch(url).then(res => {
          resolve(res.json());
          // return res.json();
        }).catch(e => {
          reject(e);
          console.log(e);
        });
      });

      return promise;

    }  

    getRepos(userName:string){
      console.log("Repo service");
      
          let url = `${this.link}${userName}/repos`;
      
      let promise = new Promise((resolve, reject) => {
        fetch(url).then(res => {
          resolve(res.json());
          // return res.json();
        }).catch(e => {
          reject(e);
          console.log(e);
        });
      });

      return promise;

    }     
  }