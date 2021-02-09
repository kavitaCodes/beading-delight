import {} from 'jasmine';
import { Location, TitleCasePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { By } from '@angular/platform-browser';
import { appRoutes } from '../../app-routing.module';
import {
  Router,
  RouterLinkWithHref,
  ActivatedRoute,
  convertToParamMap,
} from '@angular/router';
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { PatternsListComponent } from '../patterns-list/patterns-list.component';
import { of } from 'rxjs';

import { PatternService } from '../pattern.service';
import { PatternDetailComponent } from './pattern-detail.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PatternDetailComponent', () => {
  let component: PatternDetailComponent;
  let fixture: ComponentFixture<PatternDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        PatternService,

        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 3 }),
          },
        },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(appRoutes),
      ],
      declarations: [PatternDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the pattern name  change according to the titlecase pipe ', fakeAsync(() => {
    let fixture = TestBed.createComponent(PatternDetailComponent);
    let component = fixture.debugElement.componentInstance;
    let router = TestBed.inject(Router);
    let location = TestBed.inject(Location);
    router.initialNavigation();
    tick();
    router.navigate(['patterns/3']);
    tick();
    let patternService = fixture.debugElement.injector.get(PatternService);
    let desiredPattern = patternService.getPattern(2);
    let spy = spyOn(patternService, 'getPattern').and.returnValue(
      desiredPattern
    );
    const pipe = new TitleCasePipe();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h4').textContent).toEqual(
      pipe.transform(desiredPattern.name)
    );
  }));

  it("should display the  h4 tag innerText of 'Materials Needed", fakeAsync(() => {
    let fixture = TestBed.createComponent(PatternDetailComponent);
    let component = fixture.debugElement.componentInstance;
    let router = TestBed.inject(Router);
    let location = TestBed.inject(Location);
    router.initialNavigation();
    tick();
    router.navigate(['patterns/3']);
    tick();
    let patternService = fixture.debugElement.injector.get(PatternService);

    fixture.detectChanges();
    let eleH4 = fixture.nativeElement.querySelectorAll('h4');
    expect(eleH4[1].textContent).toBe('Materials Needed');
  }));
  //   cannot match the URL
  //  it('should have the pattern img source corresponding with the url id ', fakeAsync(() => {
  //    let fixture = TestBed.createComponent(PatternDetailComponent);
  //    let component = fixture.debugElement.componentInstance;
  //    let router = TestBed.inject(Router);
  //    let location = TestBed.inject(Location);
  //    router.initialNavigation();
  //    tick();
  //    router.navigate(['patterns/3']);
  //    tick();
  //    let patternService = fixture.debugElement.injector.get(PatternService);
  //    let desiredPattern = patternService.getPattern(3);
  //    let spy = spyOn(patternService, 'getPattern').and.returnValue(
  //      desiredPattern
  //    );

  //    fixture.detectChanges();

  //    expect (fixture.nativeElement.querySelector('img').src).toContain(
  //      desiredPattern.imagePath)

  //  })
  //  );
});
