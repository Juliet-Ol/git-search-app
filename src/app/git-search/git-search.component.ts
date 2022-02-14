import { Component, OnInit } from '@angular/core';
import { GitSearch } from '../git-search/git-search'
import { GitService } from '../git-services/git.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers: [GitService]
})
export class GitSearchComponent implements OnInit {

  gitsearch!: GitSearch[];

  constructor(gitService:GitService) { 
    this.gitsearch = gitService.getGitHubRepo
  }

  ngOnInit(): void {
  }

}
