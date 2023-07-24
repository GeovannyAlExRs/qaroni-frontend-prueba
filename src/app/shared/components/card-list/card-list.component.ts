import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

import { Observable, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@modules/pages/templates/store/data.store'
//import * as fromRoot from '@store/store'

import { ReadNews } from '@modules/pages/templates/store/news/news.store.actions';
import { NewsResponse } from '@modules/pages/templates/store/news/news.store.interfaces';
import { getAllNews, getLoading } from '@modules/pages/templates/store/news/news.store.selectors';
import { NewsResult } from '@core/models/news.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  newslist$!: Observable<NewsResponse[] | any>
  newsResult$!: Observable<NewsResult[] | null>
  loading$!: Observable<boolean | null>
  @Input() search: string = ''

  newsR!: any
  news: Array<any> = []

  constructor(private dialogRef: MatDialog, private store: Store<fromRoot.NewsListState>) {}

  ngOnInit(): void {

    this.store.dispatch(new ReadNews())
    this.loading$ = this.store.pipe(select(getLoading))
    this.newslist$ = this.store.pipe(select(getAllNews))

    this.newslist$.subscribe((res) => {
    console.log('CARDS NEWS: ', res);

    })

    console.log('STORE: ', this.newslist$);

    this.mockupNews()
  }

  openDialog() : void {
    this.dialogRef.open(
      ModalDetailComponent,
      { data: {
        id: '123456789'
      }}
    );
  }

  receiveData(event: string): void {
    this.search = event
    console.log('Desde el padre: ', this.search);
  }

  mockupNews() : void {

    this.news = [
      {
        date: 'Mar 21, 2021',
        img: 'https://demos.creative-tim.com/notus-pro-react/static/media/city-1.501c0bb7.jpg',
        title: 'En esta vida hay que luchar',
        shortDescription: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
      },
      {
        date: 'Feb 16, 2021',
        img: 'https://demos.creative-tim.com/notus-pro-react/static/media/city-1.501c0bb7.jpg',
        title: 'Todo llega a su tiempo',
        shortDescription: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
      },
      {
        date: 'Nov 24, 2020',
        img: 'https://demos.creative-tim.com/notus-pro-react/static/media/city-1.501c0bb7.jpg',
        title: 'Aun falta, pero voy a culminarlo',
        shortDescription: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
      },
    ]

  }
}

