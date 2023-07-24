import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-header-generic',
  templateUrl: './card-header-generic.component.html',
  styleUrls: ['./card-header-generic.component.scss']
})
export class CardHeaderGenericComponent implements OnInit {

  @Input() title: string = ''
  @Input() subtitle: string = ''
  @Input() itemlist: string = ''
  @Input() itemdate: string = ''

  @Input() options1: Array<any> = []

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  searchNames: string = ''

  constructor() {}

  ngOnInit(): void {}

  callSearch(valor: any): void {
    if(valor.length >= 3) {
      this.callbackData.emit(valor)
    } else {
      this.callbackData.emit(valor)
    }
  }

}
