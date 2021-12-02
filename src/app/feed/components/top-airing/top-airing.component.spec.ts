import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAiringComponent } from './top-airing.component';

describe('TopAiringComponent', () => {
  let component: TopAiringComponent;
  let fixture: ComponentFixture<TopAiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAiringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
