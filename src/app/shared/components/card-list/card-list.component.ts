import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  news: Array<any> = []

  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {
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

