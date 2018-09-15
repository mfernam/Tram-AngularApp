import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopLineComponent } from './stop-line.component';

describe('StopLineComponent', () => {
  let component: StopLineComponent;
  let fixture: ComponentFixture<StopLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
