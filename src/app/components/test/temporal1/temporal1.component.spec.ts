import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temporal1Component } from './temporal1.component';

describe('Temporal1Component', () => {
  let component: Temporal1Component;
  let fixture: ComponentFixture<Temporal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temporal1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temporal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
