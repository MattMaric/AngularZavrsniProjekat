import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpathyComponent } from './simpathy.component';

describe('SimpathyComponent', () => {
  let component: SimpathyComponent;
  let fixture: ComponentFixture<SimpathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpathyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
