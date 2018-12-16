import {Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Account} from '../account/account';
import {NavService} from './nav.service';

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

  @ViewChild('loginAccount') loginAccount: Account;

  @ViewChild('registerAccount') registerAccount: Account;

  constructor(private NavService: NavService) {
  }

  ngOnInit() {
    this.title = this.NavService.getTitle();
    this.showLogin = true;
    this.showRegister = true;
    this.showQuit = false;
  }

  doLogin() {
    this.showLogin = false;
    this.showRegister = false;
    this.showQuit = true;
  }

  doRegister() {
    this.showLogin = true;
    this.showRegister = true;
    this.showQuit = false;
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
    this.loginAccount = account;
    this.registerAccount = account;
    this.showLogin = true;
    this.showRegister = true;
    this.showQuit = false;
  }
}
