import { Component, OnInit } from '@angular/core';
import { GitSearchComponent } from '../git-search/git-search.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gitsearch!:GitSearchComponent;

  constructor() { }

  ngOnInit(): void {
  }
  

}
