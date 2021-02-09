declare var require: any;
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Pattern } from '../pattern.model';
import { PatternService } from '../pattern.service';

@Component({
  selector: 'app-pattern-detail',
  templateUrl: './pattern-detail.component.html',
  styleUrls: ['./pattern-detail.component.scss'],
})
export class PatternDetailComponent implements OnInit {
  pattern: Pattern;
  id: number;
  materials: string = '';

  constructor(
    private patternService: PatternService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.pattern = this.patternService.getPattern(this.id);
    });
  }

  downloadPdf(path: string, name: string) {
    let FileSaver = require('file-saver');
    FileSaver.saveAs(path, name);
  }

  ngAfterViewInit() {
    this.http
      .get(this.pattern.textPath, { responseType: 'text' })
      .subscribe((data) => (this.materials = data));
  }
}
