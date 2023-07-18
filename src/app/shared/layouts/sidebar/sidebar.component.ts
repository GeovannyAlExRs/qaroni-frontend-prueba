import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList: { accessLink: Array<any> } = { accessLink: [] }

  @Output() menuToggle = new EventEmitter<void>()
  @Output() signOut = new EventEmitter<void>()
  @Input() isAuthorized!: boolean | null

  istoken!: string | null

  constructor() {}

  ngOnInit(): void {

    this.menuList.accessLink = [
      { name: 'News', icon: 'uil uil-estate', router: ['/news'], band: this.isAuthorized },
      { name: 'Login', icon: 'uil uil-signin', router: ['/auth/login'], band: this.isAuthorized },
      { name: 'Groups', icon: 'uil uil-users-alt', router: ['/groups'], band: !this.isAuthorized },
      { name: 'Forms', icon: 'uil uil-user-plus', router: ['/forms'], band: this.isAuthorized },
      { name: 'Sign out', icon: 'uil uil-signout', router: ['/auth/login'], band: !this.isAuthorized }
    ]


  }

  closeMenu() :void {
    this.menuToggle.emit()
  }

  logoutUser(menu: string): void {
    if(menu === 'Sign out') {
      this.signOut.emit()
    }
  }
}
