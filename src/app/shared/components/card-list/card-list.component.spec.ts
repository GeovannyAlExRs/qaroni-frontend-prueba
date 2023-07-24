import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { MatDialog } from '@angular/material/dialog';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatDialog],
      declarations: [CardListComponent]
    });
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
