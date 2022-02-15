import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../git-class/git';

@Injectable({
  providedIn: 'root'
})

export class GitService {
 
  link = 'https://api.github.com/users/';
  user!: Git
  userName:any   
  

  constructor(public  http:HttpClient) {
    this.userName = 'Juliet-Ol'
    this.user = new Git('','')
    
   }
   

    getProfile(){
      let promise = new Promise((resolve, reject)=>{
        this.http.get<any>(this.link + this.userName).toPromise().then(
          response=>{
            this.user.image = response.avatar_url
            this.user.name =  response.name

            resolve(console.log('image and name fetched'))
          },error => {
            reject(console.log('name and image not found'))
          }
        ) 
      })
      return promise
    }



    }  
       
  

