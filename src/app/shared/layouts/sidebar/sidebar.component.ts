import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from '@services/token/token.service';

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

  constructor(private tokenService: TokenService) {}

  ngDoCheck() : void {
    this.istoken = this.tokenService.getToken()
    //console.log(' isAuthorized '+ this.isAuthorized + ' tiene token: ' + this.istoken);
  }

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
