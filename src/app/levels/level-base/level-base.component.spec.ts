import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBaseComponent } from './level-base.component';

describe('LevelBaseComponent', () => {
  let component: LevelBaseComponent;
  let fixture: ComponentFixture<LevelBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
