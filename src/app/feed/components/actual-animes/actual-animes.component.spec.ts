import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualAnimesComponent } from './actual-animes.component';

describe('ActualAnimesComponent', () => {
  let component: ActualAnimesComponent;
  let fixture: ComponentFixture<ActualAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
