import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PatternsListComponent } from './patterns-list.component';
import { PatternService } from '../pattern.service';
import { PatternDetailComponent } from '../pattern-detail/pattern-detail.component';

describe('PatternsListComponent', () => {
  let component: PatternsListComponent;
  let fixture: ComponentFixture<PatternsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatternsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the same number of patterns from the patterns service', () => {
    let fixture = TestBed.createComponent(PatternsListComponent);
    let app = fixture.debugElement.componentInstance;
    let patternService = fixture.debugElement.injector.get(PatternService);
    let patterns = patternService.getPatterns();
    fixture.detectChanges();
    expect(patterns.length).toEqual(app.patterns.length);
  });

  it('should use the pattern description from the patterns service', () => {
    let fixture = TestBed.createComponent(PatternsListComponent);
    let app = fixture.debugElement.componentInstance;
    let patternService = fixture.debugElement.injector.get(PatternService);
    let patterns = patternService.getPatterns();
    fixture.detectChanges();
    expect(patterns[0].description).toEqual(app.patterns[0].description);
  });

  it('should transform the pattern name coming from the patterns service', () => {
    //pipe
    let fixture = TestBed.createComponent(PatternsListComponent);
    let app = fixture.debugElement.componentInstance;

    let patternService = fixture.debugElement.injector.get(PatternService);
    let patterns = patternService.getPatterns();

    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.caption').textContent).toEqual(
      'Crystal Luster Flower Bracelet'
    );
  });

  it('should have the same img source as in  the patterns service', fakeAsync(() => {
    let fixture = TestBed.createComponent(PatternsListComponent);
    let app = fixture.debugElement.componentInstance;
    let patternService = fixture.debugElement.injector.get(PatternService);
    let patterns = patternService.getPatterns();

    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let divele = compiled.querySelectorAll('img');
    // expect(divele.length).toEqual(9);
    expect(divele[1]['src']).toContain('crystal_net_1.jpg');
  }));
});
