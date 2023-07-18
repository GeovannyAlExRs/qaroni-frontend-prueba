import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  options: Array<any> = []
  title: string = 'User Form'
  subtitle: string = 'This information will be displayed publicly so be careful what you share.'

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {list: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'), icon: 'uil uil-calender'},
      {list: 'New register', icon: 'uil uil-user-plus'}
    ]
  }
}
