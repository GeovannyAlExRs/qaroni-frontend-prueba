import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@modules/pages/templates/store/data.store'
//import * as fromRoot from '@store/store'

import { ReadGroups } from '@modules/pages/templates/store/groups/groups.store.actions';
import { GroupsResponse } from '@modules/pages/templates/store/groups/groups.store.interfaces';
import { getAllGroups, getLoading } from '@modules/pages/templates/store/groups/groups.store.selectors';
import { GroupsResult } from '@core/models/groups.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  options: Array<any> = []
  title: string = 'Groups'
  subtitle: string = 'Every day better informed with the latest news.'

  public groupslist$! : Observable<GroupsResult[] | any>
  public loading$!: Observable<boolean | null>

  constructor(private store: Store<fromRoot.GroupsListState>) {}

  ngOnInit(): void {
    this.options = [
      {list: formatDate(new Date(), 'yyyy-MM-dd', 'en-US'), icon: 'uil uil-calender'},
      {list: 'Groups: ' + '10+', icon: 'uil uil-users-alt'}
    ]


    this.store.dispatch(new ReadGroups());
    this.loading$ = this.store.pipe(select(getLoading))
    this.groupslist$ = this.store.pipe(select(getAllGroups))

    this.groupslist$.subscribe((value) => {
    console.log('GROUPS: ', value);
    })
    //const groupslist = JSON.stringify(this.groupslist$)
    console.log('GROUPS: ', this.groupslist$);
  }
}
