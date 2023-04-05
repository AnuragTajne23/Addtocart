import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurglassesComponent } from './ourglasses.component';

describe('OurglassesComponent', () => {
  let component: OurglassesComponent;
  let fixture: ComponentFixture<OurglassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurglassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
