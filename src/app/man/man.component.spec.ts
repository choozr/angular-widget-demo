import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManComponent } from './man.component';

describe('ManComponent', () => {
  let component: ManComponent;
  let fixture: ComponentFixture<ManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManComponent]
    });
    fixture = TestBed.createComponent(ManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
