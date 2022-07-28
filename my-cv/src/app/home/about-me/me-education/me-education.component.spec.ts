import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeEducationComponent } from './me-education.component';

describe('MeEducationComponent', () => {
  let component: MeEducationComponent;
  let fixture: ComponentFixture<MeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
