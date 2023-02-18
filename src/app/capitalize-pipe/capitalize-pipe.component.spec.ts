import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizePipeComponent } from './capitalize-pipe.component';

describe('CapitalizePipeComponent', () => {
  let component: CapitalizePipeComponent;
  let fixture: ComponentFixture<CapitalizePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalizePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
