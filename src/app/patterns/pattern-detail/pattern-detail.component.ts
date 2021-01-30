import { Component, Input, OnInit, Output } from '@angular/core';
import { Pattern } from '../pattern.model';
import { PatternService } from '../pattern.service';

@Component({
  selector: 'app-pattern-detail',
  templateUrl: './pattern-detail.component.html',
  styleUrls: ['./pattern-detail.component.scss']
})
export class PatternDetailComponent implements OnInit {
 @Input() pattern: Pattern;

  constructor(private patternService: PatternService) { }

  ngOnInit() {
  }

}
