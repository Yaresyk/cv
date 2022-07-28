import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeTitleComponent } from './me-title.component';

describe('MeTitleComponent', () => {
  let component: MeTitleComponent;
  let fixture: ComponentFixture<MeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
