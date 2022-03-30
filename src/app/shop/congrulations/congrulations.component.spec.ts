import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongrulationsComponent } from './congrulations.component';

describe('CongrulationsComponent', () => {
  let component: CongrulationsComponent;
  let fixture: ComponentFixture<CongrulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongrulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongrulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
