import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWellComponent } from './get-well.component';

describe('GetWellComponent', () => {
  let component: GetWellComponent;
  let fixture: ComponentFixture<GetWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
