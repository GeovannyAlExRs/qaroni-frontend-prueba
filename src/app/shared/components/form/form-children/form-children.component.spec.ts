import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChildrenComponent } from './form-children.component';

describe('FormChildrenComponent', () => {
  let component: FormChildrenComponent;
  let fixture: ComponentFixture<FormChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormChildrenComponent]
    });
    fixture = TestBed.createComponent(FormChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
