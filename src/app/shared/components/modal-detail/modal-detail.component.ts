import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit{

  id: string = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialog) {
    this.id = data.id
  }

  ngOnInit(): void {}

  closeDialog() : void {
    this.dialogRef.closeAll();
  }

}
