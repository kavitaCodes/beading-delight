import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsListComponent } from './patterns-list.component';

describe('PatternsListComponent', () => {
  let component: PatternsListComponent;
  let fixture: ComponentFixture<PatternsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
