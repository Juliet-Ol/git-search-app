import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { 
    this.http = http;
  }

  getGitHubRepo() {
    return this.http.get(``)
  }
}
