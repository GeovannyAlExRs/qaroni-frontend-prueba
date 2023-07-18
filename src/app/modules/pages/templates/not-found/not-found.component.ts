import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Output() signOut = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {
  }

  logoutUser(): void {
    console.log('NO TE OLVIDES DE ELINMINAREL TOKEN...');

    this.signOut.emit()
  }
}
