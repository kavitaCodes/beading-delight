import { Component,  OnInit } from '@angular/core';

import { Pattern } from '../pattern.model';
import { PatternService } from '../pattern.service';

@Component({
  selector: 'app-patterns-list',
  templateUrl: './patterns-list.component.html',
  styleUrls: ['./patterns-list.component.scss']
})
export class PatternsListComponent implements OnInit {
  pattern1: Pattern;
   patterns: Pattern[];

  constructor(private patternService: PatternService) { }

  ngOnInit() {
     this.patterns= this.patternService.getPatterns();
     console.log(this.patterns);
  }

  onSelected(){
   this.patternService.patternSelected.next(this.pattern1);
  }



}
