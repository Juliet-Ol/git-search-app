import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repo-git',
  templateUrl: './repo-git.component.html',
  styleUrls: ['./repo-git.component.css']
})
export class RepoGitComponent implements OnInit {

  // repo! : Repo[];
  repos: any;
  service: any;

  constructor() { }

  ngOnInit(): void {
    this.repos.getProfile()
    this.repos = this.service.repos
  }

}
