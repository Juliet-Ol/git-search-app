import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Git } from '../git-class/git';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
    newGit = new Git("","","");
    @Output() addGit = new EventEmitter<Git>();

    submitGit(){
      this.newGit.emit(this.newGit)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
