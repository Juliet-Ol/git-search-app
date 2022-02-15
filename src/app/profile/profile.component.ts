import { Component, OnInit } from '@angular/core';
import { GitSearchComponent } from '../git-search/git-search.component';
import { Git } from '../git-class/git';
import { GitService } from '../git-services/git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gitsearch!:GitSearchComponent;
  user!: Git;
  data: any;

  constructor(public gitservices: GitService) {}


  ngOnInit(): void {
    console.log("hello world");
    this.gitservices.getProfile().then(data => {
      this.data =  data;
    });
  }
  

}

