import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormPersonModule } from '@shared/components/form/form-person/form-person.module';
import { FormChildrenModule } from '@shared/components/form/form-children/form-children.module';
import { FormFilmsModule } from '@shared/components/form/form-films/form-films.module';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        CardHeaderGenericModule,

        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,

        FormPersonModule,
        FormChildrenModule,
        FormFilmsModule
      ],
      declarations: [FormsComponent]
    });
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
