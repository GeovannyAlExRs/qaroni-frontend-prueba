import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  options: Array<any> = []
  title: string = 'Groups'
  subtitle: string = 'Every day better informed with the latest news.'

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {list: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'), icon: 'uil uil-calender'},
      {list: 'Groups: ' + '10+', icon: 'uil uil-users-alt'}
    ]
  }
}
