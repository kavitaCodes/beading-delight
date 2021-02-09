import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { Router, RouterLinkWithHref } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../app-routing.module';
import { appRoutes } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { PatternsComponent } from '../patterns/patterns.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ShoppingComponent } from '../shopping/shopping.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let debugElement: DebugElement;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes(appRoutes)],
      declarations: [
        HeaderComponent,
        HomeComponent,
        PatternsComponent,
        ContactUsComponent,
        ShoppingComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    // router.initialNavigation();
  });

  it(
    'should navigate to HomeComponent as a default tab ',
    waitForAsync(() => {
      let fixture = TestBed.createComponent(HeaderComponent);
      let debugElement = fixture.debugElement.componentInstance;
      let router = TestBed.inject(Router);
      let location = TestBed.inject(Location);
      router.initialNavigation();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/home');
      });
    })
  );

  it('should navigate to patternsComponent when clicking on second Router Link', fakeAsync(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let debugElement = fixture.debugElement;
    let router = TestBed.inject(Router);
    let location = TestBed.inject(Location);
    router.initialNavigation();
    fixture.detectChanges();

    let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    links[0].nativeElement.click();
    tick();
    expect(location.path()).toBe('/patterns');
  }));
});
