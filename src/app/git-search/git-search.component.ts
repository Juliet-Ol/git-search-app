import { Component, OnInit } from '@angular/core';
// import { GitSearch } from '../git-search/git-search'
import { GitService } from '../git-services/git.service';
import { Git } from '../git-class/git';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers: [GitService]
})
export class GitSearchComponent implements OnInit {

  // gitsearch!: GitSearch[];
  user!: Git

  constructor( public gitservices: GitService) { 
    this.gitservices.getProfile('')
    //.then(()=>{
      // console.log(this.user)
    // })
      // .subscribe(()=>{
      //   console.log("hey")
      // });
    
    
  }

  ngOnInit(): void {
  }

}
