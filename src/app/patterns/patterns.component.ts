import { Component, OnInit, Output } from '@angular/core';
import { Pattern } from './pattern.model';
import { PatternService } from './pattern.service';


@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})

export class PatternsComponent implements OnInit {
  
  constructor(private patternService: PatternService) { }

  ngOnInit() {

  }

}
