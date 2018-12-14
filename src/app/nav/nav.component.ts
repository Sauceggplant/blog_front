import {Component, OnInit} from '@angular/core';
import {Account} from '../account/account';
import {NavService} from './nav.service';
import {LoginService} from '../login/login.service';
import {RegisterService} from '../register/register.service';

/**
 * 登陆modal组件
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private NavService: NavService, private LoginService: LoginService, private RegisterService: RegisterService) {
  }

  public ngOnInit() {
    this.title = this.NavService.getTitle();
    this.showLogin = this.NavService.showLogin();
    this.showRegister = this.NavService.showRegister();
    this.showQuit = this.NavService.showQuit();
  }

  /**
   * 标题
   */
  private title: string;

  private showLogin: boolean = false;

  private showRegister: boolean = false;

  private showQuit: boolean = false;

  private quit() {
    var account: Account = {
      id: '',
      username: '',
      password: '',
    };
    this.LoginService.setAccount(account);
    this.RegisterService.setAccount(account);
  }
}
