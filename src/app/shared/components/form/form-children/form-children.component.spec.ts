import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChildrenComponent } from './form-children.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('FormChildrenComponent', () => {
  let component: FormChildrenComponent;
  let fixture: ComponentFixture<FormChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        FormsModule,
      ],
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
