import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../account/account';
import { LoginService } from './login.service';
import { LoginData } from './login';

/**
 * 登陆modal组件
 * @author zhaozixing
 * @date 2018-12-15
 * @version V1.0.0
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * 登陆操作传值
   */
  @Output('doLogin') doLogin = new EventEmitter<any>();

  /**
   * 登陆的账户信息
   */
  loginAccount: Account = {
    id: '',
    username: '',
    password: '',
  };

  constructor(private LoginService: LoginService) {
  }

  ngOnInit() {
  }

  /**
   * 登陆
   * @param username 用户名
   * @param password 密码
   */
  login(username: string, password: string) {
    var loginData: LoginData = this.LoginService.login(username, password);
    this.loginAccount = loginData.account;
    console.log('####login():' + loginData.result + ':' + loginData.info);
    this.doLogin.emit(loginData);
  }
}
