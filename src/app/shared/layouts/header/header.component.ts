import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from '@services/token/token.service';
import { UsersResponse } from '@store/users/users.store.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: { defaultOptions: Array<any> } = { defaultOptions: [] }

  @Output() menuToggle = new EventEmitter<void>()
  @Output() signOut = new EventEmitter<void>()
  @Input() isAuthorized!: boolean | null
  @Input() users!: UsersResponse | null

  istoken!: string | null
  isId!: string | null

  constructor(private tokenService: TokenService) {}

  ngDoCheck() : void {
    this.istoken = this.tokenService.getToken()
    this.isId = this.tokenService.getUserID()
    //console.log(' isAuthorized '+ this.isAuthorized + ' tiene token: ' + this.istoken);
  }

  ngOnInit(): void {

    console.log('USERS: ' + this.users?.result[0].userId);


    this.mainMenu.defaultOptions = [
      { name: 'News', icon: 'uil uil-estate', router: ['/news'], band: this.isAuthorized },
      { name: 'Login', icon: 'uil uil-signin', router: ['/auth/login'], band: this.isAuthorized },
      { name: 'Groups', icon: 'uil uil-users-alt', router: ['/groups'], band: !this.isAuthorized },
      { name: 'Forms', icon: 'uil uil-user-plus', router: ['/forms'], band: this.isAuthorized },
      { name: 'Sign out', icon: 'uil uil-signout', router: ['/auth/login'], band: !this.isAuthorized }
    ]


  }

  menuToggleDispatch() : void {
    this.menuToggle.emit()
  }

  logoutUser(menu: string): void {
    if(menu === 'Sign out') {
      this.signOut.emit()
    }
  }
}
