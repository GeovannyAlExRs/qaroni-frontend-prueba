import { formatDate } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  options: Array<any> = []
  title: string = 'News'
  subtitle: string = 'Every day better informed with the latest news.'

  @Output() searchInmueble: string = ''

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {list: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'), icon: 'uil uil-calender'},
      {list: 'News: ' + '10+', icon: 'uil uil-newspaper'}
    ]
  }

  receiveData(event: string): void {
    console.log('Estoy desde el padre: ', event);
    this.searchInmueble = event
  }
}
